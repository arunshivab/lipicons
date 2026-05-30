using System.Text.Json;
using LiPicons.Blazor;
using Xunit;

namespace LiPicons.Blazor.Tests;

public class RendererFidelityTests
{
    // Proves the C# renderer's inner SVG is byte-identical to the JS build pipeline
    // (scripts/build.mjs) for representative cases incl. baked-in-dot duotone + fill.
    [Theory]
    [InlineData("warning", "duotone", LipiconVariant.Duotone)]
    [InlineData("settings", "fill", LipiconVariant.Fill)]
    [InlineData("search", "regular", LipiconVariant.Regular)]
    [InlineData("filter", "bold", LipiconVariant.Bold)]
    [InlineData("warning", "regular", LipiconVariant.Regular)]
    [InlineData("plus", "thin", LipiconVariant.Thin)]
    public void CSharpInner_MatchesJsBuild(string name, string variant, LipiconVariant v)
    {
        var expected = JsonSerializer.Deserialize<Dictionary<string, string>>(
            File.ReadAllText("expected.json"))!;
        Assert.True(IconManifest.TryGet(name, out var paths));
        var (inner, _) = LipiconRenderer.Render(paths, v);
        Assert.Equal(expected[$"{name}|{variant}"], inner);
    }
}

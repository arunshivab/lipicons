using Bunit;
using LiPicons.Blazor;
using Xunit;

namespace LiPicons.Blazor.Tests;

public class LipiIconTests : TestContext
{
    // ---- §6: unknown name renders nothing and never throws (both environments) ----

    [Theory]
    [InlineData(true)]
    [InlineData(false)]
    public void UnknownName_RendersNothing_AndDoesNotThrow(bool dev)
    {
        LipiIcon.DevModeOverride = dev;
        var cut = RenderComponent<LipiIcon>(p => p.Add(x => x.Name, "definitely-not-an-icon"));
        Assert.Equal(string.Empty, cut.Markup.Trim());
        LipiIcon.DevModeOverride = null;
    }

    [Fact]
    public void EmptyName_RendersNothing()
    {
        var cut = RenderComponent<LipiIcon>(p => p.Add(x => x.Name, ""));
        Assert.Equal(string.Empty, cut.Markup.Trim());
    }

    // ---- §6: known icon renders a visible svg ----

    [Fact]
    public void KnownIcon_RendersSvg()
    {
        var cut = RenderComponent<LipiIcon>(p => p.Add(x => x.Name, "filter"));
        var svg = cut.Find("svg");
        Assert.Equal("0 0 24 24", svg.GetAttribute("viewBox"));
        Assert.NotEmpty(svg.InnerHtml);
    }

    // ---- §6: Color=null → currentColor; Color set → that color ----

    [Fact]
    public void ColorNull_UsesCurrentColor()
    {
        var cut = RenderComponent<LipiIcon>(p => p.Add(x => x.Name, "filter"));
        Assert.Equal("currentColor", cut.Find("svg").GetAttribute("stroke"));
    }

    [Fact]
    public void ColorSet_OverridesCurrentColor_Everywhere()
    {
        var cut = RenderComponent<LipiIcon>(p => p
            .Add(x => x.Name, "warning")          // has a baked-in fill="currentColor" dot
            .Add(x => x.Color, "#c0392b"));
        Assert.Equal("#c0392b", cut.Find("svg").GetAttribute("stroke"));
        Assert.DoesNotContain("currentColor", cut.Markup);
        Assert.Contains("#c0392b", cut.Markup);
    }

    // ---- §6: Size scales the box; viewBox stays 24×24 ----

    [Fact]
    public void Size_ScalesBox_ViewBoxUnchanged()
    {
        var cut = RenderComponent<LipiIcon>(p => p
            .Add(x => x.Name, "filter")
            .Add(x => x.Size, 32));
        var svg = cut.Find("svg");
        Assert.Equal("32", svg.GetAttribute("width"));
        Assert.Equal("32", svg.GetAttribute("height"));
        Assert.Equal("0 0 24 24", svg.GetAttribute("viewBox"));
    }

    [Fact]
    public void DefaultSize_Is24()
    {
        var cut = RenderComponent<LipiIcon>(p => p.Add(x => x.Name, "filter"));
        Assert.Equal("24", cut.Find("svg").GetAttribute("width"));
    }

    // ---- §6: Title null → aria-hidden; Title set → role=img + aria-label ----

    [Fact]
    public void TitleNull_IsDecorative()
    {
        var cut = RenderComponent<LipiIcon>(p => p.Add(x => x.Name, "filter"));
        var svg = cut.Find("svg");
        Assert.Equal("true", svg.GetAttribute("aria-hidden"));
        Assert.Null(svg.GetAttribute("role"));
    }

    [Fact]
    public void TitleSet_IsLabeledImage()
    {
        var cut = RenderComponent<LipiIcon>(p => p
            .Add(x => x.Name, "filter")
            .Add(x => x.Title, "Filter results"));
        var svg = cut.Find("svg");
        Assert.Equal("img", svg.GetAttribute("role"));
        Assert.Equal("Filter results", svg.GetAttribute("aria-label"));
        Assert.Null(svg.GetAttribute("aria-hidden"));
    }

    // ---- §1: Class is appended to the lipicon root class ----

    [Fact]
    public void Class_AppendedToRoot()
    {
        var cut = RenderComponent<LipiIcon>(p => p
            .Add(x => x.Name, "filter")
            .Add(x => x.Class, "text-danger"));
        var cls = cut.Find("svg").GetAttribute("class");
        Assert.Equal("lipicon text-danger", cls);
    }

    // ---- variant fidelity: stroke widths match build.mjs ----

    [Theory]
    [InlineData(LipiconVariant.Regular, "1.75")]
    [InlineData(LipiconVariant.Bold, "2.25")]
    [InlineData(LipiconVariant.Light, "1.25")]
    [InlineData(LipiconVariant.Thin, "1")]
    [InlineData(LipiconVariant.Duotone, "1.5")]
    public void StrokeVariants_HaveCorrectWidth(LipiconVariant variant, string expected)
    {
        var cut = RenderComponent<LipiIcon>(p => p
            .Add(x => x.Name, "filter")
            .Add(x => x.Variant, variant));
        Assert.Equal(expected, cut.Find("svg").GetAttribute("stroke-width"));
    }

    [Fact]
    public void FillVariant_HasNoStrokeWidth_AndFillsShapes()
    {
        var cut = RenderComponent<LipiIcon>(p => p
            .Add(x => x.Name, "filter")
            .Add(x => x.Variant, LipiconVariant.Fill));
        var svg = cut.Find("svg");
        Assert.Null(svg.GetAttribute("stroke-width"));
        Assert.Contains("fill=\"currentColor\"", svg.InnerHtml);
    }

    [Fact]
    public void DuotoneVariant_HasTranslucentBackgroundFill()
    {
        var cut = RenderComponent<LipiIcon>(p => p
            .Add(x => x.Name, "filter")
            .Add(x => x.Variant, LipiconVariant.Duotone));
        Assert.Contains("fill-opacity=\"0.22\"", cut.Find("svg").InnerHtml);
    }

    // ---- manifest sanity ----

    [Fact]
    public void Manifest_HasAllIcons()
    {
        Assert.True(IconManifest.Count >= 1164,
            $"Expected at least 1164 icons, manifest has {IconManifest.Count}.");
    }
}

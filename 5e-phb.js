Hooks.on("init", () => {
    CONFIG.TinyMCE.style_formats[0].items.push(
        {title : 'Fancy Table', selector : 'table', classes : 'class-table'}
    );
    CONFIG.TinyMCE.toolbar = "styleselect forecolor backcolor bullist numlist image table hr link removeformat code fontselect fontsizeselect save";
    let defaultFonts = "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Signika=Signika,sans-serif;Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"
    CONFIG.TinyMCE.font_formats = (CONFIG.TinyMCE.font_formats?CONFIG.TinyMCE.font_formats:defaultFonts) + ";BookSanity=BookSanity;NodestoCaps=NodestoCaps;ScalySans=ScalySans;ScalySansSmallCaps=ScalySansSmallCaps;Solberry=Solberry;MrJeeves=MrJeeves";
});

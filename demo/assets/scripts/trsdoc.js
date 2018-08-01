module.exports = (document) => {

  const unqry = {

    /* A Aliases * * * * * * * * * * * * * * * * * * * * */
      adoptNode: document.adoptNode.bind(document),
      append: document.append.bind(document),
    /* * * * * * * * * * * * * * * * * * * * * * * * * * */


    /* B Aliases * * * * * * * * * * * * * * * * * * * * */
      body: document.body,
    /* * * * * * * * * * * * * * * * * * * * * * * * * * */


    /* C Aliases * * * * * * * * * * * * * * * * * * * * */
      children: document.children,
      cset: document.characterSet,
      cec: document.childElementCount,
      cmode: document.compatMode,
      ctype: document.contentType,
      cscript: document.currentScript,
      crfp: document.caretRangeFromPoint.bind(document),
      clear: document.clear.bind(document),
      close: document.close.bind(document),
      c_attr: document.createAttribute.bind(document),
      c_cdata: document.createCDATASection.bind(document),
      cr_Comment: document.createComment.bind(document),
      cr_df: document.createDocumentFragment.bind(document),
      cr_elem: document.createElement.bind(document),
      cr_elemns: document.createElementNS.bind(document),
      cr_er: document.createEntityReference,
      cr_ev: document.createEvent.bind(document),
      cr_expr: document.createExpression.bind(document),
      cr_ni: document.createNodeIterator.bind(document),
      cr_nsr: document.createNSResolver.bind(document),
      cr_pi: document.createProcessingInstruction.bind(document),
      cr_range: document.createRange.bind(document),
      cr_tn: document.createTextNode.bind(document),
      cr_touch: document.createTouch,
      cr_tl: document.createTouchList,
      cr_tw: document.createTreeWalker.bind(document),
    /* * * * * * * * * * * * * * * * * * * * * * * * * * */


    /* D Aliases * * * * * * * * * * * * * * * * * * * * */
      dview: document.defaultView,
      dmode: document.designMode,
      dir: document.dir,
      dtype: document.doctype,
      delem: document.documentElement,
      duri: document.documentURI,
      durio: document.documentURIObject,
      domain: document.domain,
      dconfig: document.domConfig,
    /* * * * * * * * * * * * * * * * * * * * * * * * * * */


    /* E Aliases * * * * * * * * * * * * * * * * * * * * */
      embeds: document.embeds,
      eval: document.evaluate.bind(document),
      execc: document.execCommand.bind(document),
      epl: document.exitPointerLock.bind(document),
    /* * * * * * * * * * * * * * * * * * * * * * * * * * */


    /* F Aliases * * * * * * * * * * * * * * * * * * * * */
      fgc: document.fgColor,
      fec: document.firstElementChild,
      forms: document.forms,
      flsc: document.fullscreen,
      flscen: document.fullscreenEnabled,
    /* * * * * * * * * * * * * * * * * * * * * * * * * * */


    /* G Aliases * * * * * * * * * * * * * * * * * * * * */
      ge_byid: document.getElementById.bind(document),
      ge_bycls: document.getElementsByClassName.bind(document),
      ge_bynm: document.getElementsByName.bind(document),
      ge_bytg: document.getElementsByTagName.bind(document),
      ge_bytgns: document.getElementsByTagNameNS.bind(document),
    /* * * * * * * * * * * * * * * * * * * * * * * * * * */


    /* H Aliases * * * * * * * * * * * * * * * * * * * * */
      head: document.head,
      height: document.height,
      hidden: document.hidden,
      hasFocus: document.hasFocus.bind(document),
    /* * * * * * * * * * * * * * * * * * * * * * * * * * */


    /* I Aliases * * * * * * * * * * * * * * * * * * * * */
      images: document.images,
      impl: document.implementation,
      ipmn: document.importNode.bind(document),
    /* * * * * * * * * * * * * * * * * * * * * * * * * * */


    /* L Aliases * * * * * * * * * * * * * * * * * * * * */
      lec: document.lastElementChild,
      lm: document.lastModified,
      lsss: document.lastStyleSheetSet,
      lc: document.linkColor,
      links: document.links,
      loc: document.location,
    /* * * * * * * * * * * * * * * * * * * * * * * * * * */


    /* M Aliases * * * * * * * * * * * * * * * * * * * * */
      mozsd: document.mozSyntheticDocument,
    /* * * * * * * * * * * * * * * * * * * * * * * * * * */


    /* O Aliases * * * * * * * * * * * * * * * * * * * * */
      on_abort: document.onabort,
      on_ase: document.onafterscriptexecute,
      on_ac: document.onanimationcancel,
      on_ae: document.onanimationend,
      on_ait: document.onanimationiteration,
      on_auxc: document.onauxclick,
      on_bse: document.onbeforescriptexecute,
      on_blur: document.onblur,
      on_change: document.onchange,
      on_click: document.onclick,
      on_close: document.onclose,
      on_cm: document.oncontextmenu,
      on_dc: document.ondblclick,
      on_error: document.onerror,
      on_focus: document.onfocus,
      on_fsc: document.onfullscreenchange,
      on_fse: document.onfullscreenerror,
      on_gpc: document.ongotpointercapture,
      on_input: document.oninput,
      on_kd: document.onkeydown,
      on_kp: document.onkeypress,
      on_ku: document.onkeyup,
      on_load: document.onload,
      on_load_e: document.onloadend,
      on_load_s: document.onloadstart,
      on_lpc: document.onlostpointercapture,
      on_md: document.onmousedown,
      on_mm: document.onmousemove,
      on_mout: document.onmouseout,
      on_mover: document.onmouseover,
      on_mu: document.onmouseup,
      on_offline: document.onoffline,
      on_online: document.ononline,
      on_pc: document.onpointercancel,
      on_pd: document.onpointerdown,
      on_pe: document.onpointerenter,
      on_pl: document.onpointerleave,
      on_pm: document.onpointermove,
      on_pout: document.onpointerout,
      on_pover: document.onpointerover,
      on_pu: document.onpointerup,
      on_reset: document.onreset,
      on_resize: document.onresize,
      on_scroll: document.onscroll,
      on_select: document.onselect,
      on_sc: document.onselectionchange,
      on_ss: document.onselectstart,
      on_submit: document.onsubmit,
      on_tc: document.ontouchcancel,
      on_tm: document.ontouchmove,
      on_ts: document.ontouchstart,
      on_trnsc: document.ontransitioncancel,
      on_trnse: document.ontransitionend,
      on_vc: document.onvisibilitychange,
      on_wheel: document.onwheel,
      origin: document.origin,
      open: document.open.bind(document),
    /* * * * * * * * * * * * * * * * * * * * * * * * * * */


    /* P Aliases * * * * * * * * * * * * * * * * * * * * */
      plugins: document.plugins,
      pun: document.popupNode,
      psss: document.preferredStyleSheetSet,
      prepend: document.prepend.bind(document),
    /* * * * * * * * * * * * * * * * * * * * * * * * * * */


    /* Q Aliases * * * * * * * * * * * * * * * * * * * * */
      qce: document.queryCommandEnabled.bind(document),
      qcs: document.queryCommandSupported.bind(document),
      qs: document.querySelector.bind(document),
      qsa: document.querySelectorAll.bind(document),
    /* * * * * * * * * * * * * * * * * * * * * * * * * * */


    /* R Aliases * * * * * * * * * * * * * * * * * * * * */
      re: document.registerElement.bind(document),
      rs: document.readyState,
      referrer: document.referrer,
    /* * * * * * * * * * * * * * * * * * * * * * * * * * */


    /* S Aliases * * * * * * * * * * * * * * * * * * * * */
      scripts: document.scripts,
      se: document.scrollingElement,
      ssss: document.selectedStyleSheetSet,
      sss: document.styleSheetSets,
    /* * * * * * * * * * * * * * * * * * * * * * * * * * */


    /* T Aliases * * * * * * * * * * * * * * * * * * * * */
      tl: document.timeline,
      title: document.title,
      ttn: document.tooltipNode,
    /* * * * * * * * * * * * * * * * * * * * * * * * * * */


    /* U Aliases * * * * * * * * * * * * * * * * * * * * */
      URL: document.URL,
    /* * * * * * * * * * * * * * * * * * * * * * * * * * */


    /* V Aliases * * * * * * * * * * * * * * * * * * * * */
      vs: document.visibilityState,
      vlc: document.vlinkColor,
    /* * * * * * * * * * * * * * * * * * * * * * * * * * */


    /* W Aliases * * * * * * * * * * * * * * * * * * * * */
      width: document.width,
    /* * * * * * * * * * * * * * * * * * * * * * * * * * */


    /* X Aliases * * * * * * * * * * * * * * * * * * * * */
      xmle: document.xmlEncoding,
      xmlv: document.xmlVersion,
    /* * * * * * * * * * * * * * * * * * * * * * * * * * */


    /* W Aliases * * * * * * * * * * * * * * * * * * * * */
      write: document.write.bind(document),
      writeln: document.writeln.bind(document)
    /* * * * * * * * * * * * * * * * * * * * * * * * * * */

  }

  return unqry;
}

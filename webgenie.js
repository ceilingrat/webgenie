({
  data : {
    code : "",
    confirm : true,
    srcFull : "",
    srcPrefix : "https://output.jsbin.com/",
    srcSuffix : ".js"
  },
  fn : {
    loadSrc : function ( oData ) {
      var data = oData;
      if ( !data.code ) data.code = prompt( "Paste script code" );
      if ( !data.srcFull ) data.srcFull = data.srcPrefix + data.code + data.srcSuffix;
      if ( data.confirm ) data.srcFull = prompt( "Confirm script URL\nIf necessary, edit URL text below", data.srcFull );
    },
    SrcToScriptElm : function ( pStrSrc ) {
      var oScript = document.createElement("script");
      oScript.setAttribute("src", pStrSrc);
      return oScript;           
    }
  },
  run : function () {
    var data = this.data, fn = this.fn;
    fn.loadSrc(data);
    if ( !data.srcFull ) return;
    document.body.append( fn.SrcToScriptElm( data.src ) );
    console.log( "script executed: ", data.src );
  }  
}).run();
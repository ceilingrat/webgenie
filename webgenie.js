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

({
  data : {
    code : "",
    confirm : true,
    srcFull : "",
    srcPrefix : "https://output.jsbin.com/",
    srcSuffix : ".js"
  },
  /* functions with no side-effects */
  fn : {
    ReduceObjContructorArrayItem ( pAcc, pVal ) {
        if ( "fn" in pVal && 
              "prototype" in pVal ) {
            var fnX = pVal.fn;
            for ( var y in pVal.prototype ) {
                fnX.prototype[y] = pVal.prototype[y];
            }
            pAcc[fnX.name] = fnX;                
        }
        return pAcc;
    },
    SrcToScriptElm : function ( pStrSrc ) {
      var oScript = document.createElement("script");
      oScript.setAttribute("src", pStrSrc);
      return oScript;           
    }
  },
  /* object constructors */
  o : [
      /*
          {
              fn : function Foo ( pStr1 ) {

              },
              prototype : {
                  bar : function () {},
                  baz : function () {}
              }
          }
      */
  ],
  /* main execution, incl. local variables */
  run : function () {
      var data = this.data, fn = this.fn, o = this.o.reduce( fn.ReduceObjContructorArrayItem , {} );
  }
}).run();
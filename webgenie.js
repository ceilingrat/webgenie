({
  data : {
    code : "",
    confirm : true,
    srcFull : "",
    srcPrefix : "https://output.jsbin.com/",
    srcSuffix : ".js"
  },
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
    }
  },
  o : [
    {
      fn : function Src ( oData ) {
        var private = {};
        for ( var x in oData ) private[x] = oData[x];   
        if ( !private.srcFull ) {
          if ( !private.code ) private.code = prompt( "Paste script code" );
          private.srcFull = private.srcPrefix + private.code + private.srcSuffix;
        }
        this.getSrcFull = function () { return private.srcFull; }
        this.getConfirm = function () { return private.confirm; }
      },
      prototype : {
        insertScript : function () {
          var bConfirm = this.getConfirm(), sSrcFull = this.getSrcFull(), oScript;
          if ( bConfirm ) sSrcFull = prompt( "Confirm script URL\nIf necessary, edit URL text below", sSrcFull );
          if ( !sSrcFull ) return;
          oScript = document.createElement("script");
          oScript.setAttribute("src", sSrcFull);           
          document.body.append( oScript );
          console.log( "script inserted: ", sSrcFull );
        }
      }
    }
  ],
  run : function () {
      var data = this.data, fn = this.fn, o = this.o.reduce( fn.ReduceObjContructorArrayItem , {} );
      var oSrc1 = new o.Src(data);
      oSrc1.insertScript();
  }
}).run();
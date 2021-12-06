class MeuObjeto {

    constructor() {
        this._info = "Victor"
    }

    upper() {
        this._info = this._info.toUpperCase();

        return this;
    }

    lower() {
        this._info = this._info.toLowerCase();

        return this;
    }
}

function MeuObjeto2() {
    let _info = "Victor"

    const upper = function() {
        this._info = this._info.toUpperCase();

        return this;
    }

    const lower = function() {
        this._info = this._info.toLowerCase();

        return this;
    }
}









const mo = new MeuObjeto();
mo.upper()
  .lower()
  .upper()
  .lower();
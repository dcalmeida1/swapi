class Card extends HTMLElement {

  constructor(){
    super();
    // this.root = this.attachShadow({mode: 'open'});
  }

  set card(obj){
    this.innerHTML = `
        <div class="sw-card">
        <h2>${obj.name}</h3>
          <div class="sw-card-table">
            <div class="row">
              <div class="col-sm-3">
                <div class="sw-card-title">Birth year:</div>
              </div>
              <div class="col-sm-3">
                <div class="sw-card-info">${obj.birth_year}</div>
              </div>
              <div class="col-sm-3">
                <div class="sw-card-title">Eye color:</div>
              </div>
              <div class="col-sm-3">
                <div class="sw-card-info">${obj.eye_color}</div>
              </div>
              <div class="col-sm-3">
                <div class="sw-card-title">Gender:</div>
              </div>
              <div class="col-sm-3">
                <div class="sw-card-info">${obj.gender}</div>
              </div>
              <div class="col-sm-3">
                <div class="sw-card-title">Hair Color:</div>
              </div>
              <div class="col-sm-3">
                <div class="sw-card-info">${obj.hair_color}</div>
              </div>
            </div>
          </div>
      </div>
    `
  }
}

customElements.define('sw-card',Card);
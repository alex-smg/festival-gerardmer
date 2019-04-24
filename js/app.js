Vue.component('navbar',{
    template:
        `<header>
            <nav>
                <div>
                    <img src="img/SVG/logo.svg" alt="">
                </div>
                <ul>
                    <li><a href="">Projections</a>
                    <span></span></li>
                    <li><a href="">Réalisateurs</a>
                    <span></span></li>
                    <li><a href="">Jury</a>
                    <span></span></li>
                    <li><a href="">Actualités</a>
                    <span></span></li>
                </ul>
            </nav>
        </header>`
})


var app = new Vue({
    el: '#app',
    data: {
        films: [],
        jour: '',
        alljour: []
    },
    methods:{
      filtre: function (e) {

          this.jour = e.target.innerHTML
          console.log(this.jour)
          },



      },
    mounted(){
        fetch("http://localhost:63342/festival-gerardmer/js/data.json")
            .then(response => response.json())
            .then((data) => {
                this.films = data.films;
                console.log(this.films)
                diffusion = []

                for (var i = 0; i <  data.films.length; i++) {
                    result = data.films[i].diffusion
                    diffusion.push(result);
                }

                function cleanArray(array) {
                    var i, j, len = array.length, out = [], obj = {};
                    for (i = 0; i < len; i++) {
                        obj[array[i]] = 0;
                    }
                    for (j in obj) {
                        out.push(j);
                    }
                    return out;
                }
                this.alljour = cleanArray(diffusion)

            })
    },



})
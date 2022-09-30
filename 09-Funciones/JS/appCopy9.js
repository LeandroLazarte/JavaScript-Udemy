// Métodos de propiedad
const reproductor = {
    reproducir: function(id){
        console.log(`Reproduciendo cancion con el ${id}... `);
    },
    pausar: function () {
        console.log('Pausando...');
    },
    borrar: function(id){
        console.log(`Borrando cancion ${id}`);
    },
    crearPlaylist: function(nombrePlaylist){
        console.log(`Creando la PlayList de ${nombrePlaylist}`);
    },
    reproducirPlayList: function(nombre){
        console.log(`Reproducir la PlayList de ${nombre}`);
    }
}

reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausar();
reproductor.borrar(30);
reproductor.reproducirPlayList('Heavy Metal');
reproductor.crearPlaylist('Rock');
reproductor.crearPlaylist('Reggae');
reproductor.reproducirPlayList('Reggae');
reproductor.reproducirPlayList('Rock');
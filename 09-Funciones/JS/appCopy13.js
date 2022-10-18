// Métodos de propiedad
const reproductor = {
    reproducir: (id) => console.log(`Reproduciendo cancion con el ${id}... `),
    pausar: () => console.log('Pausando...'),
    borrar: (id) => console.log(`Borrando cancion ${id}`),
    crearPlaylist: (nombrePlaylist) => console.log(`Creando la PlayList de ${nombrePlaylist}`),
    reproducirPlayList: (nombre) => console.log(`Reproducir la PlayList de ${nombre}`),
    cancion: '',
    set nuevaCancion(cancion) {
        this.cancion = cancion;
        console.log(`Añadir ${cancion}`);
    },
    get obtenerCancion() {
        console.log(`Reproduciendo ${this.cancion}`);
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
reproductor.nuevaCancion = 'Solo queda consuelo';
reproductor.obtenerCancion;
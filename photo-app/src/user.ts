import { Album } from './album';

export class User {
    private album: Album[];

    constructor(private id: number,
                private username: string,
                private firstName: string,
                private isPro: boolean){
        this.album = [];
    }

    addAlbum(album: Album){
        this.album.push(album);
    }

    removeAlbum(album: Album): Album | undefined {
        // Buscar Album
        const index = this.album.findIndex(a => a.id === album.id);
        let deletedAlbum;
        if(index >= 0) {
            deletedAlbum = this.album[index];
            this.album.splice(index, 1);
        }
        return deletedAlbum;
    }
}
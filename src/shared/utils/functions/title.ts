export const getTitle = (path: string) => {
    let title = 'Inicio'
    const newPath = path.split('/')

    switch(newPath[1]) {
      case 'rutas':
        title = 'Hoja de ruta'
      break;
      case 'empleos':
        title = 'Empleo'
      break;
      case 'cursos':
        title = 'Cursos'
      break;
      case 'certificaciones':
        title = 'Certificaciones'
      break;
      case 'foros':
        title = 'Foros'
      break;
      case 'novedades':
        title = 'Novedades'
      break;
      case 'comunidad':
        title = 'Comunidad'
      break;
      case 'favoritos':
        title = 'Favoritos'
      break;
      default:
        return title = 'Inicio'
    }

    return title
}
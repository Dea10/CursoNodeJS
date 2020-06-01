const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js')
const yargs = require('yargs')
const argv = yargs.command(
  'listar', 'List base-limit-table', {
  base: {
    alias: 'b',
    require: true
  },
  limite: {
    alias: 'l',
    default: 10
  }
}
).command(
  'crear', 'Builds base-limit-table file', {
    base: {
      alias: 'b',
      require: true
    },
    limite: {
      alias: 'l',
      default: 10
    }
  }
)
.argv;

switch (argv._[0]) {
  case 'crear':
    crearArchivo(argv.base, argv.limite)
      .then(archivo => console.log(`Archivo creado: ${archivo}`))
      .catch(err => console.log(err))
    break;

  case 'listar':
    listarTabla(argv.base, argv.limite)
    break;

  default:
    break;
}

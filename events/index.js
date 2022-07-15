// TODO 1
const { EventEmitter } = require('events');
 
const birthdayEventListener = ({name}) => {
    console.log(`Happy birthday ${name}!`);
  }
   
  // TODO 2
  const myEmitter = new EventEmitter();
   
  // TODO 3
  // fungsi yang akan dijalankan ketika event terjadi
  myEmitter.on('birthday-start', birthdayEventListener);

  // TODO 4
  // Memicu event 'coffee-order' terjadi.
    myEmitter.emit('birthday-start', { name: 'Dimas' });
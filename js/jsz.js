var on = 'background-color: #811336'
var off = 'background-color: #2d132c'

//controler 1 js code start
$(function() {
  $('#chkLED').click(function() {
    $('#chkLED').attr('disabled', 'disabled')
    setTimeout(function() {
      $('#chkLED').removeAttr('disabled')
    }, 500)
  })
})

function loadImage() {
  var bios = document.getElementById('chkLED').checked
  if (bios === true) {
    document.getElementById('img').src = 'on.png'
    document.getElementById('bgControler1').style = on
  } else {
    document.getElementById('img').src = 'off.png'
    document.getElementById('bgControler1').style = off
  }
}

//window.alert("working");
var db = firebase.firestore()
$('#chkLED').click(function() {
  var LEDstatus = $(this).is(':checked')
  db.collection('LEDStatus')
    .doc('U2t37pcTobLwoW6FQNYI')
    .update({
      control1: LEDstatus
    })
  if (LEDstatus === true) {
    document.getElementById('img').src = 'on.png'
    document.getElementById('bgControler1').style = on
  } else {
    document.getElementById('img').src = 'off.png'
    document.getElementById('bgControler1').style = off
  }
})

//real time update
db.collection('LEDStatus').onSnapshot(function(Snapsort) {
  Snapsort.docChanges().forEach(function(change) {
    if (change.type === 'added') {
      $('#chkLED').prop('checked', change.doc.data().control1)
      loadImage()
    }
    if (change.type === 'modified') {
      $('#chkLED').prop('checked', change.doc.data().control1)
      loadImage()
    }
  })
})
//controler 1 js code end

//controler 2 js code start
$(function() {
  $('#controler2').click(function() {
    $('#controler2').attr('disabled', 'disabled')
    setTimeout(function() {
      $('#controler2').removeAttr('disabled')
    }, 500)
  })
})

function loadImage2() {
  var bios = document.getElementById('controler2').checked
  if (bios === true) {
    document.getElementById('controler2img').src = 'on.png'
    document.getElementById('bgControler2').style = on
  } else {
    document.getElementById('controler2img').src = 'off.png'
    document.getElementById('bgControler2').style = off
  }
}

//window.alert("working");
var db = firebase.firestore()
$('#controler2').click(function() {
  var LEDstatus = $(this).is(':checked')
  db.collection('LEDStatus')
    .doc('U2t37pcTobLwoW6FQNYI')
    .update({
      control2: LEDstatus
    })
  if (LEDstatus === true) {
    document.getElementById('controler2img').src = 'on.png'
    document.getElementById('bgControler2').style = on
  } else {
    document.getElementById('controler2img').src = 'off.png'
    document.getElementById('bgControler2').style = off
  }
})

//real time update
db.collection('LEDStatus').onSnapshot(function(Snapsort) {
  Snapsort.docChanges().forEach(function(change) {
    if (change.type === 'added') {
      $('#controler2').prop('checked', change.doc.data().control2)
      loadImage2()
    }
    if (change.type === 'modified') {
      $('#controler2').prop('checked', change.doc.data().control2)
      loadImage2()
    }
  })
})
//controler 2 js code end

//controler 3 js code start
$(function() {
  $('#controler3').click(function() {
    $('#controler3').attr('disabled', 'disabled')
    setTimeout(function() {
      $('#controler3').removeAttr('disabled')
    }, 500)
  })
})

function loadImage3() {
  var bios = document.getElementById('controler3').checked
  if (bios === true) {
    document.getElementById('controler3img').src = 'on.png'
    document.getElementById('bgControler3').style = on
  } else {
    document.getElementById('controler3img').src = 'off.png'
    document.getElementById('bgControler3').style = off
  }
}

//window.alert("working");
var db = firebase.firestore()
$('#controler3').click(function() {
  var LEDstatus = $(this).is(':checked')
  db.collection('LEDStatus')
    .doc('U2t37pcTobLwoW6FQNYI')
    .update({
      control3: LEDstatus
    })
  if (LEDstatus === true) {
    document.getElementById('controler3img').src = 'on.png'
    document.getElementById('bgControler3').style = on
  } else {
    document.getElementById('controler3img').src = 'off.png'
    document.getElementById('bgControler3').style = off
  }
})

//real time update
db.collection('LEDStatus').onSnapshot(function(Snapsort) {
  Snapsort.docChanges().forEach(function(change) {
    if (change.type === 'added') {
      $('#controler3').prop('checked', change.doc.data().control3)
      loadImage3()
    }
    if (change.type === 'modified') {
      $('#controler3').prop('checked', change.doc.data().control3)
      loadImage3()
    }
  })
})
//controler 3 js code end

//controler 4 js code start
$(function() {
  $('#controler4').click(function() {
    $('#controler4').attr('disabled', 'disabled')
    setTimeout(function() {
      $('#controler4').removeAttr('disabled')
    }, 500)
  })
})

function loadImage4() {
  var bios = document.getElementById('controler4').checked
  if (bios === true) {
    document.getElementById('controler4img').src = 'on.png'
    document.getElementById('bgControler4').style = on
  } else {
    document.getElementById('controler4img').src = 'off.png'
    document.getElementById('bgControler4').style = off
  }
}

//window.alert("working");
var db = firebase.firestore()
$('#controler4').click(function() {
  var LEDstatus = $(this).is(':checked')
  db.collection('LEDStatus')
    .doc('U2t37pcTobLwoW6FQNYI')
    .update({
      control4: LEDstatus
    })
  if (LEDstatus === true) {
    document.getElementById('controler4img').src = 'on.png'
    document.getElementById('bgControler4').style = on
  } else {
    document.getElementById('controler4img').src = 'off.png'
    document.getElementById('bgControler4').style = off
  }
})

//real time update
db.collection('LEDStatus').onSnapshot(function(Snapsort) {
  Snapsort.docChanges().forEach(function(change) {
    if (change.type === 'added') {
      $('#controler4').prop('checked', change.doc.data().control4)
      loadImage4()
    }
    if (change.type === 'modified') {
      $('#controler4').prop('checked', change.doc.data().control4)
      loadImage4()
    }
  })
})
//controler 4 js code end

//controler 5 js code start
$(function() {
  $('#controler5').click(function() {
    $('#controler5').attr('disabled', 'disabled')
    setTimeout(function() {
      $('#controler5').removeAttr('disabled')
    }, 500)
  })
})

function loadImage5() {
  var bios = document.getElementById('controler5').checked
  if (bios === true) {
    document.getElementById('controler5img').src = 'on.png'
    document.getElementById('bgControler5').style = on
  } else {
    document.getElementById('controler5img').src = 'off.png'
    document.getElementById('bgControler5').style = off
  }
}

//window.alert("working");
var db = firebase.firestore()
$('#controler5').click(function() {
  var LEDstatus = $(this).is(':checked')
  db.collection('LEDStatus')
    .doc('U2t37pcTobLwoW6FQNYI')
    .update({
      control5: LEDstatus
    })
  if (LEDstatus === true) {
    document.getElementById('controler5img').src = 'on.png'
    document.getElementById('bgControler5').style = on
  } else {
    document.getElementById('controler5img').src = 'off.png'
    document.getElementById('bgControler5').style = offscreenBuffering
  }
})

//real time update
db.collection('LEDStatus').onSnapshot(function(Snapsort) {
  Snapsort.docChanges().forEach(function(change) {
    if (change.type === 'added') {
      $('#controler5').prop('checked', change.doc.data().control5)
      loadImage5()
    }
    if (change.type === 'modified') {
      $('#controler5').prop('checked', change.doc.data().control5)
      loadImage5()
    }
  })
})
//controler 5 js code end

//controler 6 js code start
$(function() {
  $('#controler6').click(function() {
    $('#controler6').attr('disabled', 'disabled')
    setTimeout(function() {
      $('#controler6').removeAttr('disabled')
    }, 500)
  })
})

function loadImage6() {
  var bios = document.getElementById('controler6').checked
  if (bios === true) {
    document.getElementById('controler6img').src = 'on.png'
    document.getElementById('bgControler6').style = on
  } else {
    document.getElementById('controler6img').src = 'off.png'
    document.getElementById('bgControler6').style = off
  }
}

//window.alert("working");
var db = firebase.firestore()
$('#controler6').click(function() {
  var LEDstatus = $(this).is(':checked')
  db.collection('LEDStatus')
    .doc('U2t37pcTobLwoW6FQNYI')
    .update({
      control6: LEDstatus
    })
  if (LEDstatus === true) {
    document.getElementById('controler6img').src = 'on.png'
    document.getElementById('bgControler6').style = on
  } else {
    document.getElementById('controler6img').src = 'off.png'
    document.getElementById('bgControler6').style = off
  }
})

//real time update
db.collection('LEDStatus').onSnapshot(function(Snapsort) {
  Snapsort.docChanges().forEach(function(change) {
    if (change.type === 'added') {
      $('#controler6').prop('checked', change.doc.data().control6)
      loadImage6()
    }
    if (change.type === 'modified') {
      $('#controler6').prop('checked', change.doc.data().control6)
      loadImage6()
    }
  })
})
//controler 6 js code end

//controler 7 js code start
$(function() {
  $('#controler7').click(function() {
    $('#controler7').attr('disabled', 'disabled')
    setTimeout(function() {
      $('#controler7').removeAttr('disabled')
    }, 500)
  })
})

function loadImage7() {
  var bios = document.getElementById('controler7').checked
  if (bios === true) {
    document.getElementById('controler7img').src = 'on.png'
    document.getElementById('bgControler7').style = on
  } else {
    document.getElementById('controler7img').src = 'off.png'
    document.getElementById('bgControler7').style = off
  }
}

//window.alert("working");
var db = firebase.firestore()
$('#controler7').click(function() {
  var LEDstatus = $(this).is(':checked')
  db.collection('LEDStatus')
    .doc('U2t37pcTobLwoW6FQNYI')
    .update({
      control7: LEDstatus
    })
  if (LEDstatus === true) {
    document.getElementById('controler7img').src = 'on.png'
    document.getElementById('bgControler7').style = on
  } else {
    document.getElementById('controler7img').src = 'off.png'
    document.getElementById('bgControler7').style = off
  }
})

//real time update
db.collection('LEDStatus').onSnapshot(function(Snapsort) {
  Snapsort.docChanges().forEach(function(change) {
    if (change.type === 'added') {
      $('#controler7').prop('checked', change.doc.data().control7)
      loadImage7()
    }
    if (change.type === 'modified') {
      $('#controler7').prop('checked', change.doc.data().control7)
      loadImage7()
    }
  })
})
//controler 7 js code end

//controler 8 js code start
$(function() {
  $('#controler8').click(function() {
    $('#controler8').attr('disabled', 'disabled')
    setTimeout(function() {
      $('#controler8').removeAttr('disabled')
    }, 500)
  })
})

function loadImage8() {
  var bios = document.getElementById('controler8').checked
  if (bios === true) {
    document.getElementById('controler8img').src = 'on.png'
    document.getElementById('bgControler8').style = on
  } else {
    document.getElementById('controler8img').src = 'off.png'
    document.getElementById('bgControler8').style = off
  }
}

//window.alert("working");
var db = firebase.firestore()
$('#controler8').click(function() {
  var LEDstatus = $(this).is(':checked')
  db.collection('LEDStatus')
    .doc('tm4SYr1FNuU2t37pcTobLwoW6FQNYIhQcV1V3oaT')
    .update({
      control8: LEDstatus
    })
  if (LEDstatus === true) {
    document.getElementById('controler8img').src = 'on.png'
    document.getElementById('bgControler8').style = on
  } else {
    document.getElementById('controler8img').src = 'off.png'
    document.getElementById('bgControler8').style = off
  }
})

//real time update
db.collection('LEDStatus').onSnapshot(function(Snapsort) {
  Snapsort.docChanges().forEach(function(change) {
    if (change.type === 'added') {
      $('#controler8').prop('checked', change.doc.data().control8)
      loadImage8()
    }
    if (change.type === 'modified') {
      $('#controler8').prop('checked', change.doc.data().control8)
      loadImage8()
    }
  })
})
//controler 8 js code end

//Speach Command
var message = document.querySelector('#message')
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList

var grammer = '#JSGF V1.0;'

var recognition = new SpeechRecognition()
var speechRecognitionGrammerList = new SpeechGrammarList()

speechRecognitionGrammerList.addFromString(grammer, 1)
recognition.grammers = speechRecognitionGrammerList
recognition.lang = 'en-US'
recognition.interimResults = false

recognition.onresult = function(event) {
  var last = event.results.length - 1
  var command = event.results[last][0].transcript
  message.textContent = command + '.'

  if (command.toLowerCase() === 'on bathroom light') {
    document.querySelector('#chkLED').checked = true
    var db = firebase.firestore()
    db.collection('LEDStatus')
      .doc('U2t37pcTobLwoW6FQNYI')
      .update({
        control1: true
      })
    document.getElementById('img').src = 'on.png'
    document.getElementById('bgControler1').style = on
  } else if (command.toLowerCase() === 'off bathroom light') {
    document.querySelector('#chkLED').checked = false
    var db = firebase.firestore()
    db.collection('LEDStatus')
      .doc('U2t37pcTobLwoW6FQNYI')
      .update({
        control1: false
      })
    document.getElementById('img').src = 'off.png'
    document.getElementById('bgControler1').style = off
  }
  //controler1 end

  //controler2 start
  if (command.toLowerCase() === 'on bedroom light') {
    document.querySelector('#controler2').checked = true
    var db = firebase.firestore()
    db.collection('LEDStatus')
      .doc('U2t37pcTobLwoW6FQNYI')
      .update({
        control2: true
      })
    document.getElementById('controler2img').src = 'on.png'
    document.getElementById('bgControler2').style = on
  } else if (command.toLowerCase() === 'off bedroom light') {
    document.querySelector('#controler2').checked = false
    var db = firebase.firestore()
    db.collection('LEDStatus')
      .doc('U2t37pcTobLwoW6FQNYI')
      .update({
        control2: false
      })
    document.getElementById('controler2img').src = 'off.png'
    document.getElementById('bgControler2').style = on
  }
  //controler2 end

  //controler3 start
  if (command.toLowerCase() === 'on dining room light') {
    document.querySelector('#controler3').checked = true
    var db = firebase.firestore()
    db.collection('LEDStatus')
      .doc('U2t37pcTobLwoW6FQNYI')
      .update({
        control3: true
      })
    document.getElementById('controler3img').src = 'on.png'
    document.getElementById('bgControler3').style = on
  } else if (command.toLowerCase() === 'off dining room light') {
    document.querySelector('#controler3').checked = false
    var db = firebase.firestore()
    db.collection('LEDStatus')
      .doc('U2t37pcTobLwoW6FQNYI')
      .update({
        control3: false
      })
    document.getElementById('controler3img').src = 'off.png'
    document.getElementById('bgControler3').style = off
  }
  //controler3 end

  //controler4 start
  if (command.toLowerCase() === 'on living room light') {
    document.querySelector('#controler4').checked = true
    var db = firebase.firestore()
    db.collection('LEDStatus')
      .doc('U2t37pcTobLwoW6FQNYI')
      .update({
        control4: true
      })
    document.getElementById('controler4img').src = 'on.png'
    document.getElementById('bgControler4').style = on
  } else if (command.toLowerCase() === 'off living room light') {
    document.querySelector('#controler4').checked = false
    var db = firebase.firestore()
    db.collection('LEDStatus')
      .doc('U2t37pcTobLwoW6FQNYI')
      .update({
        control4: false
      })
    document.getElementById('controler4img').src = 'off.png'
    document.getElementById('bgControler4').style = off
  }
  //controler4 end

  //controler5 start
  if (command.toLowerCase() === 'on swimming pool light') {
    document.querySelector('#controler5').checked = true
    var db = firebase.firestore()
    db.collection('LEDStatus')
      .doc('U2t37pcTobLwoW6FQNYI')
      .update({
        control5: true
      })
    document.getElementById('controler5img').src = 'on.png'
    document.getElementById('bgControler5').style = on
  } else if (command.toLowerCase() === 'off swimming pool light') {
    document.querySelector('#controler5').checked = false
    var db = firebase.firestore()
    db.collection('LEDStatus')
      .doc('U2t37pcTobLwoW6FQNYI')
      .update({
        control5: false
      })
    document.getElementById('controler5img').src = 'off.png'
    document.getElementById('bgControler5').style = off
  }
  //controler5 end

  //controler6 start
  if (command.toLowerCase() === 'on terrace light') {
    document.querySelector('#controler6').checked = true
    var db = firebase.firestore()
    db.collection('LEDStatus')
      .doc('U2t37pcTobLwoW6FQNYI')
      .update({
        control6: true
      })
    document.getElementById('controler6img').src = 'on.png'
    document.getElementById('bgControler6').style = on
  } else if (command.toLowerCase() === 'off terrace light') {
    document.querySelector('#controler6').checked = false
    var db = firebase.firestore()
    db.collection('LEDStatus')
      .doc('U2t37pcTobLwoW6FQNYI')
      .update({
        control6: false
      })
    document.getElementById('controler6img').src = 'off.png'
    document.getElementById('bgControler6').style = off
  }
  //controler6 end

  //controler7 start
  if (command.toLowerCase() === 'on master bedroom light') {
    document.querySelector('#controler7').checked = true
    var db = firebase.firestore()
    db.collection('LEDStatus')
      .doc('U2t37pcTobLwoW6FQNYI')
      .update({
        control7: true
      })
    document.getElementById('controler7img').src = 'on.png'
    document.getElementById('bgControler7').style = on
  } else if (command.toLowerCase() === 'off master bedroom light') {
    document.querySelector('#controler7').checked = false
    var db = firebase.firestore()
    db.collection('LEDStatus')
      .doc('U2t37pcTobLwoW6FQNYI')
      .update({
        control7: false
      })
    document.getElementById('controler7img').src = 'off.png'
    document.getElementById('bgControler7').style = off
  }
  //controler7 end

  //controler8 start
  if (command.toLowerCase() === 'on rooftop light') {
    document.querySelector('#controler8').checked = true
    var db = firebase.firestore()
    db.collection('LEDStatus')
      .doc('U2t37pcTobLwoW6FQNYI')
      .update({
        control8: true
      })
    document.getElementById('controler8img').src = 'on.png'
    document.getElementById('bgControler8').style = on
  } else if (command.toLowerCase() === 'off rooftop light') {
    document.querySelector('#controler8').checked = false
    var db = firebase.firestore()
    db.collection('LEDStatus')
      .doc('U2t37pcTobLwoW6FQNYI')
      .update({
        control8: false
      })
    document.getElementById('controler8img').src = 'off.png'
    document.getElementById('bgControler8').style = off
  }
  //controler8 end

  recognition.addEventListener('end', recognition.start)
}

recognition.onerror = function(event) {
  message.textContent = 'Speak : ' + event.error
}

document
  .querySelector('#btnGiveCommand')
  .addEventListener('click', function(event) {
    recognition.start()
  })

//ajax code
$(document).ready(function() {
  $('#page1').hide()
  $('#page2').show()
  $('#btnGiveCommand').on('click', function() {
    $('#page1').show()
    $('#page2').hide()
  })
})

//storage
{
if(localStorage.getItem("el1")=="checked"){
    const boss1 = document.querySelector('.boss1');
    boss1.classList.toggle('checked');    
}

if(localStorage.getItem("el2")=="checked"){
    const boss2 = document.querySelector('.boss2');
    boss2.classList.toggle('checked');    
}

if(localStorage.getItem("el3")=="checked"){
    const boss3 = document.querySelector('.boss3');
    boss3.classList.toggle('checked');    
}

if(localStorage.getItem("el4")=="checked"){
    const boss4 = document.querySelector('.boss4');
    boss4.classList.toggle('checked');    
}

if(localStorage.getItem("el5")=="checked"){
    const boss5 = document.querySelector('.boss5');
    boss5.classList.toggle('checked');    
}

if(localStorage.getItem("el6")=="checked"){
    const boss6 = document.querySelector('.boss6');
    boss6.classList.toggle('checked');    
}

if(localStorage.getItem("el7")=="checked"){
    const boss7 = document.querySelector('.boss7');
    boss7.classList.toggle('checked');    
}

if(localStorage.getItem("el8")=="checked"){
    const boss8 = document.querySelector('.boss8');
    boss8.classList.toggle('checked');    
}

if(localStorage.getItem("el8")=="checked"){
    const boss8 = document.querySelector('.boss8');
    boss8.classList.toggle('checked');    
}

if(localStorage.getItem("el9")=="checked"){
    const boss9 = document.querySelector('.boss9');
    boss9.classList.toggle('checked');    
}

if(localStorage.getItem("el10")=="checked"){
    const boss10 = document.querySelector('.boss10');
    boss10.classList.toggle('checked');    
}

if(localStorage.getItem("el11")=="checked"){
    const boss11 = document.querySelector('.boss11');
    boss11.classList.toggle('checked');    
}

if(localStorage.getItem("el12")=="checked"){
    const boss12 = document.querySelector('.boss12');
    boss12.classList.toggle('checked');    
}

if(localStorage.getItem("el13")=="checked"){
    const boss13 = document.querySelector('.boss13');
    boss13.classList.toggle('checked');    
}

if(localStorage.getItem("el14")=="checked"){
    const boss14 = document.querySelector('.boss14');
    boss14.classList.toggle('checked');    
}

if(localStorage.getItem("el15")=="checked"){
    const boss15 = document.querySelector('.boss15');
    boss15.classList.toggle('checked');    
}

if(localStorage.getItem("el15")=="checked"){
    const boss15 = document.querySelector('.boss15');
    boss15.classList.toggle('checked');    
}

if(localStorage.getItem("el16")=="checked"){
    const boss16 = document.querySelector('.boss16');
    boss16.classList.toggle('checked');    
}

if(localStorage.getItem("el17")=="checked"){
    const boss17 = document.querySelector('.boss17');
    boss17.classList.toggle('checked');    
}

if(localStorage.getItem("el18")=="checked"){
    const boss18 = document.querySelector('.boss18');
    boss18.classList.toggle('checked');    
}

if(localStorage.getItem("el19")=="checked"){
    const boss19 = document.querySelector('.boss19');
    boss19.classList.toggle('checked');    
}

if(localStorage.getItem("el20")=="checked"){
    const boss20 = document.querySelector('.boss20');
    boss20.classList.toggle('checked');    
}
}

var list = document.querySelector('ul');
//checked
{
list.addEventListener('click', function(el1) {
  if (el1.target.className === 'boss1') {
    el1.target.classList.toggle('checked');
    localStorage.setItem("el1", "checked");
  }
}, false);

list.addEventListener('click', function(el2) {
    if (el2.target.className === 'boss2') {
      el2.target.classList.toggle('checked');
      localStorage.setItem("el2", "checked");
    }
  }, false);

  list.addEventListener('click', function(el3) {
    if (el3.target.className === 'boss3') {
      el3.target.classList.toggle('checked');
      localStorage.setItem("el3", "checked");
    }
  }, false);

  list.addEventListener('click', function(el4) {
    if (el4.target.className === 'boss4') {
      el4.target.classList.toggle('checked');
      localStorage.setItem("el4", "checked");
    }
  }, false);

  list.addEventListener('click', function(el5) {
    if (el5.target.className === 'boss5') {
      el5.target.classList.toggle('checked');
      localStorage.setItem("el5", "checked");
    }
  }, false);

  list.addEventListener('click', function(el6) {
    if (el6.target.className === 'boss6') {
      el6.target.classList.toggle('checked');
      localStorage.setItem("el6", "checked");
    }
  }, false);

  list.addEventListener('click', function(el7) {
    if (el7.target.className === 'boss7') {
      el7.target.classList.toggle('checked');
      localStorage.setItem("el7", "checked");
    }
  }, false);

  list.addEventListener('click', function(el8) {
    if (el8.target.className === 'boss8') {
      el8.target.classList.toggle('checked');
      localStorage.setItem("el8", "checked");
    }
  }, false);

  list.addEventListener('click', function(el9) {
    if (el9.target.className === 'boss9') {
      el9.target.classList.toggle('checked');
      localStorage.setItem("el9", "checked");
    }
  }, false);

  list.addEventListener('click', function(el10) {
    if (el10.target.className === 'boss10') {
      el10.target.classList.toggle('checked');
      localStorage.setItem("el10", "checked");
    }
  }, false);

  list.addEventListener('click', function(el11) {
    if (el11.target.className === 'boss11') {
      el11.target.classList.toggle('checked');
      localStorage.setItem("el11", "checked");
    }
  }, false);

  list.addEventListener('click', function(el12) {
    if (el12.target.className === 'boss12') {
      el12.target.classList.toggle('checked');
      localStorage.setItem("el12", "checked");
    }
  }, false);

  list.addEventListener('click', function(el13) {
    if (el13.target.className === 'boss13') {
      el13.target.classList.toggle('checked');
      localStorage.setItem("el13", "checked");
    }
  }, false);

  list.addEventListener('click', function(el14) {
    if (el14.target.className === 'boss14') {
      el14.target.classList.toggle('checked');
      localStorage.setItem("el14", "checked");
    }
  }, false);

  list.addEventListener('click', function(el15) {
    if (el15.target.className === 'boss15') {
      el15.target.classList.toggle('checked');
      localStorage.setItem("el15", "checked");
    }
  }, false);

  list.addEventListener('click', function(el16) {
    if (el16.target.className === 'boss16') {
      el16.target.classList.toggle('checked');
      localStorage.setItem("el16", "checked");
    }
  }, false);

  list.addEventListener('click', function(el17) {
    if (el17.target.className === 'boss17') {
      el17.target.classList.toggle('checked');
      localStorage.setItem("el17", "checked");
    }
  }, false);

  list.addEventListener('click', function(el18) {
    if (el18.target.className === 'boss18') {
      el18.target.classList.toggle('checked');
      localStorage.setItem("el18", "checked");
    }
  }, false);

  list.addEventListener('click', function(el19) {
    if (el19.target.className === 'boss19') {
      el19.target.classList.toggle('checked');
      localStorage.setItem("el19", "checked");
    }
  }, false);

  list.addEventListener('click', function(el20) {
    if (el20.target.className === 'boss20') {
      el20.target.classList.toggle('checked');
      localStorage.setItem("el20", "checked");
    }
  }, false);
}

$(document).ready(function(){
    $(".topBun img").click(function(){
        $("#bunHidden").toggle();
        $("#bunHidden").addClass("animated pulse");
    });
    $(".lettuce img").click(function(){
      $("#lettuceHidden").toggle();
      $("#lettuceHidden").addClass("animated pulse");
    })
    $(".tomato img").click(function(){
      $("#tomatoHidden").toggle();
      $("#tomatoHidden").addClass("animated pulse");
    })
    $(".bacon img").click(function(){
      $("#baconHidden").toggle();
      $("#baconHidden").addClass("animated pulse");
    })
    $(".cheese img").click(function(){
      $("#cheeseHidden").toggle();
      $("#cheeseHidden").addClass("animated pulse");
    })
    $(".patty img").click(function(){
      $("#pattyHidden").toggle();
      $("#pattyHidden").addClass("animated pulse");
    })
});


$(document).ready(function(){
	$( '.switch-yellow' ).click(function() {
		  $( '.yellow' ).toggle(true);
		  $( '.white' ).toggle(false);
		  $( '.off' ).toggle(false);
		  $( '.on' ).toggle(true);
	});
	$( '.switch-white' ).click(function() {
		  $( '.yellow' ).toggle(false);
		  $( '.white' ).toggle(true);
		  $( '.off' ).toggle(false);
		  $( '.on' ).toggle(true);
	});
	$( '.switch-off' ).click(function() {
		  $( '.yellow' ).toggle(false);
		  $( '.white' ).toggle(false);
		  $( '.off' ).toggle(true);
		  $( '.on' ).toggle(false);
	});
});



// Original code from Marcel Freinbichler
// https://github.com/freinbichler/3d-touch

var gift = document.getElementsByClassName('gift')[0];
var giftText = document.getElementsByClassName('gift-text')[0];
var giftTop = document.getElementsByClassName('gift-top')[0];
var touch = null;

addForceTouchToElement(gift);

function onTouchStart (e) {
  e.preventDefault();
  checkForce(e);
}

function onTouchMove (e) {
  e.preventDefault();
  checkForce(e);
}

function onTouchEnd (e) {
  e.preventDefault();
  touch = null;
}

function checkForce (e) {
  touch = e.touches[0];
  setTimeout(refreshForceValue.bind(touch), 10);
}

function refreshForceValue () {
  var touchEvent = this;
  var forceValue = 0;
  if (touchEvent) {
    forceValue = touchEvent.force || 0;
    setTimeout(refreshForceValue.bind(touch), 10);
  } else {
    forceValue = 0;
  }

  renderElement(forceValue);
}

function renderElement (forceValue) {
  giftTop.style.webkitTransform = 'translate3d(-5%, -'+ (forceValue * 1000) +'%, 0) rotate(-' + (forceValue * 100) + 'deg)';
  giftText.style.webkitTransform = 'translate3d(-50%, -'+ (50 + forceValue * 300) +'%, 0) scale(' + (.5 + forceValue * 1.5) + ')';
}

function addForceTouchToElement (elem) {
  elem.addEventListener('touchstart', onTouchStart, false);
  elem.addEventListener('touchmove', onTouchMove, false);
  elem.addEventListener('touchend', onTouchEnd, false);
}




addEventListener("load",app);
function app() {
	class Fortune {
		constructor(fortuneList) {
			this.text = !fortuneList ? "No fortune" : fortuneList[~~(Math.random() * fortuneList.length)];
			this.luckyNumbers = [];
			this.drawLuckyNumbers();
		}
		drawLuckyNumbers() {
			let maxDraws = 6,
				draws = maxDraws,
				maxNumber = 99,
				numberPool = [];

			// create number pool
			while (maxNumber--) {
				numberPool.unshift(maxNumber + 1);
			}
			// draw from pool, populate the lucky numbers
			while (draws--) {
				let drawn = ~~(Math.random() * numberPool.length);
				this.luckyNumbers.push(numberPool[drawn]);
				numberPool.splice(drawn,1);
			}
		}
	}

	
	
			
		fortune = new Fortune(),

		getFortune = function(){
			fortune = new Fortune(fortuneList);
			fortuneText.innerHTML = fortune.text;
			fortuneLuckyNumbers.innerHTML = fortune.luckyNumbers.join(", ");
		},
		nextState = function(){
			let elClass = this.classList,
				spawned = "spawned",
				opened = "opened";

			// open cookie
			if (elClass.contains(spawned)) {
				elClass.remove(spawned);
				elClass.add(opened);

			// new cookie
			} else {
				elClass.remove(opened);
				elClass.add(spawned);
				getFortune();
			}
		};
	
	getFortune();
	fcBtn.addEventListener("click",nextState);
}

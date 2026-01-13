var objects = [];
var time = 0;
var currentObject = 0;
var maxObject = 0;
var currentStrength = 1;
var displayHealth = 100;
var shakeIntensity = 0;
var shakeDecay = 1;
var flashDecay = 0;
var flashOpacity = 0;
var mute = false;
var totalClicks = 0;
var timeSpent = 0;
var objectsDestroyed = 0;
var lastUpdate = Date.now();
var deltaTime = 0;
var updateObj = false;
var loadedImages = [];
const FPS = 50;
const OBJECTBUTTON = document.getElementById('theClicker');
const HEALTHBAR = document.getElementById('healthBar');
const HEALTHDISPLAY = document.getElementById('healthDisplay');
const NAMEDISPLAY = document.getElementById('nameDisplay');
const DEBUGBUTTON = document.getElementById('strengthButton');
const OBJECTDISPLAY = document.getElementById('objectDisplay');
const PREVBUTTON = document.getElementById('prevObj');
const NEXTBUTTON = document.getElementById('nextObj');
const SCREEN = document.getElementById('hugeBigContainer');
const SETTINGSBUTTON = document.getElementById('settings');
const SETTINGSCONTAINER = document.getElementById('settingsContainer');
const SETTINGSPAGE = document.getElementById('settingsPage');
const FLASHBANG = document.getElementById('flashbang');
const CLICKSSTAT = document.getElementById('clicksStat');
const TIMESTAT = document.getElementById('timeStat');
const DESTROYEDSTAT = document.getElementById('destroyedStat');
const GENERICHIT = new Audio('Assets/Audio/generic.mp3');
const PAPERHIT = new Audio('Assets/Audio/paper.mp3');
const EXPLOSION = new Audio('Assets/Audio/sndExplosion.wav');

class Mineable {
    constructor(health, name, image = 'Assets/Images/Paper.png', sound = GENERICHIT) {
        this.health = health;
        this.maxHealth = this.health;
        this.name = name;
        this.image = image;
        this.sound = sound;
        this.timesBroken = 0;
    }
}

//Define objects
let object;
object = new Mineable(1, 'Talc', 'Assets/Images/Talc.png');
objects.push(object);

object = new Mineable(5, 'Dirt', 'Assets/Images/Dirt.png');
objects.push(object);

object = new Mineable(10, 'Paper', 'Assets/Images/Paper.png');
objects.push(object);

object = new Mineable(25, 'Sand', 'Assets/Images/Sand.png');
objects.push(object);

object = new Mineable(50, 'Clay', 'Assets/Images/clay.png');
objects.push(object);

object = new Mineable(100, 'Chalk', 'Assets/Images/chalk.png');
objects.push(object);

object = new Mineable(250, 'Cardboard', 'Assets/Images/Cardboard.png');
objects.push(object);

object = new Mineable(500, 'Plastic', 'Assets/Images/plastic.png');
objects.push(object);

object = new Mineable(1000, 'Wood', 'Assets/Images/Wood.png');
objects.push(object);

object = new Mineable(2500, 'Sandstone', 'Assets/Images/sandstone.png');
objects.push(object);

object = new Mineable(5000, 'Brick', 'Assets/Images/Brick.png');
objects.push(object);

object = new Mineable(10000, 'Stone', 'Assets/Images/Rock.png');
objects.push(object);

object = new Mineable(20000, 'Tin', 'Assets/Images/tin.png');
objects.push(object);

object = new Mineable(40000, 'Coal', 'Assets/Images/coal.png');
objects.push(object);

object = new Mineable(75000, 'Marble', 'Assets/Images/marble.png');
objects.push(object);

object = new Mineable(100000, 'Bronze', 'Assets/Images/Bronze.png');
objects.push(object);

object = new Mineable(150000, 'Iron', 'Assets/Images/Iron.png');
objects.push(object);

object = new Mineable(200000, 'Gold', 'Assets/Images/Gold.png');
objects.push(object);

object = new Mineable(250000, 'Lead', 'Assets/Images/Lead.png');
objects.push(object);

object = new Mineable(300000, 'Platinum', 'Assets/Images/Platinum.png');
objects.push(object);

object = new Mineable(350000, 'Amethyst', 'Assets/Images/Amethyst.png');
objects.push(object);

object = new Mineable(400000, 'Diamond', 'Assets/Images/Diamond.png');
objects.push(object);

object = new Mineable(500000, 'Netherite', 'Assets/Images/Netherite.png');
objects.push(object);

object = new Mineable(600000, 'Obsidian', 'Assets/Images/Obsidian.png');
objects.push(object);

object = new Mineable(700000, 'Forced 6 Frame', 'Assets/Images/6frame.png');
objects.push(object);

object = new Mineable(800000, 'Romrom\'s Orange', 'Assets/Images/Orange.png');
objects.push(object);

object = new Mineable(900000, 'Jupiter\'s Liquid Metal Core', 'Assets/Images/Core.png');
objects.push(object);

object = new Mineable(1000000, 'The Sun', 'Assets/Images/Sun.png');
objects.push(object);

object = new Mineable(2000000, 'Bedrock', 'Assets/Images/Bedrock.webp');
objects.push(object);

object = new Mineable(3000000, 'Dark Matter', 'Assets/Images/Dark_Matter.png');
objects.push(object);

object = new Mineable(4000000, 'Tukkonium', 'Assets/Images/Tukkonium.png');
objects.push(object);

object = new Mineable(5000000, 'Antimatter', 'Assets/Images/Antimatter.png');
objects.push(object);

object = new Mineable(6000000, 'Aeternus', 'Assets/Images/Aeternus.png');
objects.push(object);

object = new Mineable(7000000, 'VGA Cable Left Screw', 'Assets/Images/VGACable.png');
objects.push(object);

object = new Mineable(10000000, 'Infinity Stones', 'Assets/Images/InfinityStones.png');
objects.push(object);

object = new Mineable(20000000, 'Black Hole', 'Assets/Images/BlackHole.png');
objects.push(object);

object = new Mineable(25000000, 'objBlock', 'Assets/Images/objBlock.png');
objects.push(object);

object = new Mineable(30000000, 'Talc v2', 'Assets/Images/Talc.png');
objects.push(object);

object = new Mineable(40000000, 'Duplicator', 'Assets/Images/Duplicator.webp');
objects.push(object);

object = new Mineable(50000000, 'Diorite', 'Assets/Images/Diorite.png');
objects.push(object);

object = new Mineable(60000000, 'Splitzocat', 'Assets/Images/Splitzo.png');
objects.push(object);

object = new Mineable(70000000, 'The Elephant\'s Foot', 'Assets/Images/ElephantFoot.png');
objects.push(object);

object = new Mineable(80000000, 'Schwarlitz Longhener', 'Assets/Images/Longhener.webp');
objects.push(object);

object = new Mineable(90000000, 'Massive Limestone Cube', 'Assets/Images/Limestone.png');
objects.push(object);

object = new Mineable(100000000, 'The Fabric of Reality', 'Assets/Images/FabricOfReality.png');
objects.push(object);

object = new Mineable(1000000000, 'Time', 'Assets/Images/Time.png');
objects.push(object);

function addButtonListeners() {
    OBJECTBUTTON.addEventListener('click', hitObject);
    PREVBUTTON.addEventListener('click', changeObj);
    NEXTBUTTON.addEventListener('click', changeObj);
    SETTINGSBUTTON.addEventListener('click', toggleSettings);
    SETTINGSCONTAINER.addEventListener('click', toggleSettings);
    document.getElementById('muteButton').addEventListener('click', toggleMute);
    document.getElementById('exportButton').addEventListener('click', exportSave);
    document.getElementById('importButton').addEventListener('click', importSave);
    document.getElementById('resetButton').addEventListener('click', resetGame);
    //DEBUGBUTTON.addEventListener('click', addStrength);
}

function toggleMute() {
    mute = !mute;
    updateSettings();
}

function updateSettings() {
    if (mute) {
        document.getElementById('muteButton').innerHTML = 'Unmute';
    } else {
        document.getElementById('muteButton').innerHTML = 'Mute';
    }
}

function toggleSettings() {
    if (SETTINGSCONTAINER.style.display == 'none') {
        SETTINGSCONTAINER.style.display = 'block';
        SETTINGSPAGE.style.display = 'block';
    } else {
        SETTINGSCONTAINER.style.display = 'none';
        SETTINGSPAGE.style.display = 'none';
    }
}

function changeObj(e) {
    let iterate = parseInt(e.currentTarget.getAttribute('change'));
    if (!(currentObject + iterate < 0) && !(currentObject + iterate > maxObject)) {
        currentObject += iterate;
        updateObject();
    }
}

/*function addStrength() {
    currentStrength*=1.5;
    DEBUGBUTTON.children[0].innerHTML = `Gain *1.5 Strength (${formatNum(currentStrength)})`;
}*/

let sfx;
function hitObject() {
    totalClicks++;
    objects[currentObject].health = Math.max(0, objects[currentObject].health - currentStrength);
    if ((objects[currentObject].health <= 0) && (currentObject > 8) && (!mute)) {
        //Obj break sound
        if (!mute) {
            sfx = EXPLOSION.cloneNode(true);
            sfx.preservesPitch = false;
            sfx.play();
            sfx.playbackRate = Math.random()*0.25+0.875;
            sfx.volume = Math.min(Math.pow(currentObject/46, 3), 1)
        }
    } else if (!mute) {
        //Hit sound
        if (!mute) {
            sfx = objects[currentObject].sound.cloneNode(true);
            sfx.preservesPitch = false;
            sfx.play();
            sfx.playbackRate = Math.random()*0.5+0.75;
        }
    }
    if (objects[currentObject].health <= 0) {
        //Screen shake + flash
        shakeIntensity = Math.pow(currentObject/5, 2.4)+1;
        shakeDecay = (currentObject*0.015)+1;
        if (currentObject >= 27) {
            flashOpacity = (currentObject-10)/20;
            flashDecay = Math.pow((currentObject-46)/100, 2)+0.015;
        }
        //Reset obj health and add 1 to times broken
        objects[currentObject].timesBroken++;
        objects[currentObject].health = objects[currentObject].maxHealth;
        objectsDestroyed++;
        //If it's the first time breaking this object, move onto the next object
        if ((objects[currentObject].timesBroken == 1) && (currentObject < objects.length-1)) {
            currentObject++;
            maxObject++;
        }
        //We use this flag variable so the visuals update in time with the flash, otherwise the next object may be seen before the screen goes white
        updateObj = true;
    }
}

function loadImages() {
    for (let i = 0; i < objects.length; i++) {
        preloadImg(objects[i].image);
    }
}

function preloadImg(url) {
    let img=new Image().src = url;
    loadedImages.push(img);
}

function shakeScreen() {
    shakeIntensity = Math.max(0, shakeIntensity - shakeDecay);
    SCREEN.style.transform = `translate(${Math.random()*shakeIntensity-shakeIntensity/2}px, ${Math.random()*shakeIntensity-shakeIntensity/2}px)`;
}

function updateObject() {
    let name = objects[currentObject].name
    if (objects[currentObject].timesBroken > 0) name += ` (${formatNum(objects[currentObject].timesBroken)})`
    NAMEDISPLAY.innerHTML = name;
    OBJECTBUTTON.src = objects[currentObject].image;
    OBJECTDISPLAY.innerHTML = `#${currentObject+1}`;
    if (currentObject-1 < 0) {
        PREVBUTTON.style.opacity = '0.5';
        PREVBUTTON.style.pointerEvents = 'none';
    } else {
        PREVBUTTON.style.opacity = '1';
        PREVBUTTON.style.pointerEvents = 'all';
    }
    if (currentObject+1 > maxObject) {
        NEXTBUTTON.style.opacity = '0.5';
        NEXTBUTTON.style.pointerEvents = 'none';
    } else {
        NEXTBUTTON.style.opacity = '1';
        NEXTBUTTON.style.pointerEvents = 'all';
    }
}

function lerp(position, targetPosition, amount=0.2) {
    position += (targetPosition - position)*amount;
    return position;
}

function hslToHex(h, s, l) {
    l /= 100;
    const a = s * Math.min(l, 1 - l) / 100;
    const f = n => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color).toString(16).padStart(2, '0');   // convert to Hex and prefix "0" if needed
    };
    return `#${f(0)}${f(8)}${f(4)}`;
}

function formatNum(num, decimals = 2) {
    //return num.multiply(100).round().dividedBy(100);
    //return num.toFixed(2);
    if (num == Infinity) return "∞";
    let str = num.toString();
    let fullstop = str.indexOf('.');
    let dec = '';
    let exp = '';
    if (fullstop != -1) {
        //Decimal is present
        dec = str.slice(fullstop);
        str = str.slice(0, fullstop);
        //Round decimals
        dec = Math.round(parseFloat(dec)*Math.pow(10, decimals)).toString();
        //Add back any zeros that are cut off from increasing the number's OOM
        if (dec.length < decimals) {
            dec = dec.padStart(decimals, '0');
        //If decimal is .999, it will round up to 1, so increase int by 1 and remove decimal
        } else if (dec.length > decimals) {
            dec = '';
            str = (parseInt(str)+1).toString();
        }
    }
    //Add commas
    let commas = Math.floor((str.length-1)/3);
    for (let i = 0; i < commas; i++) {
        str = str.slice(0, -4*i-3) + ',' + str.slice(-4*i-3);
    }
    //Add formatted decimals back to number
    if ((dec != '') && (dec != '00')) {
        str += '.' + dec;
    }
    //Add e back to number
    if (exp != '') {
        str += exp;
    }
    return str;
}

function formatTime(num) {
    let str = '';
    let days = Math.floor(num / 86400000);
    let hours = Math.floor(num / 3600000) % 24;
    let minutes = Math.floor(num / 60000) % 60;
    let seconds = Math.floor(num / 1000) % 60;
    let milliseconds = num % 1000;
    if (days > 0) {
        str += `${days}:`;
    }
    if (hours.toString().length == 1) str += '0';
    str += `${hours}:`;
    if (minutes.toString().length == 1) str += '0';
    str += `${minutes}:`;
    if (seconds.toString().length == 1) str += '0';
    str += `${seconds}`;
    //if (milliseconds.toString().length == 2) str += '0';
    //str += milliseconds.toString().slice(0, -1);
    return str;
}

function save() {
    const saveDataTC = {
        objects: objects,
        currentObj: currentObject,
        maxObj: maxObject,
        mute: mute,
        totalClicks: totalClicks,
        timeSpent: timeSpent,
        objectsDestroyed: objectsDestroyed
    };
	localStorage.setItem("saveDataTC", JSON.stringify(saveDataTC));
}

function load() {
    if (localStorage.saveDataTC) saveDataTC = JSON.parse(localStorage.getItem("saveDataTC"));
    let obj;
    for (let i = 0; i < saveDataTC.objects.length; i++) {
        obj = objects.find(o => o.name === saveDataTC.objects[i].name)
        obj.health = saveDataTC.objects[i].health;
        obj.timesBroken = saveDataTC.objects[i].timesBroken;
    }
    currentObject = saveDataTC.currentObj;
    maxObject = saveDataTC.maxObj;
    mute = saveDataTC.mute;
    totalClicks = saveDataTC.totalClicks;
    timeSpent = saveDataTC.timeSpent;
    objectsDestroyed = saveDataTC.objectsDestroyed;
    updateObject();
    updateSettings();
}

function resetGame() {
    let conf = confirm("Are you sure you want to reset your save?");
    if (conf) {
        localStorage.removeItem("saveDataTC");
        location.reload();
    }
}

function exportSave() {
	let temp = btoa(JSON.stringify(localStorage.saveDataTC));
	navigator.clipboard.writeText(temp);
	alert("Save copied to clipboard!");
}

function importSave() {
	let temp = prompt("Paste save data");
	if (temp === undefined || temp === null || temp == "") {
	} else {
		try {
			localStorage.setItem("saveDataTC", JSON.parse(atob(temp)));
			load();
		}
		catch(err) {
			alert("Invalid Save");
		}
	}
}

function mainLoop() {
    var now = Date.now();
    deltaTime = now - lastUpdate;
    lastUpdate = now;
    timeSpent += deltaTime;
    //Update visuals
    if (updateObj) {
        updateObj = false;
        updateObject();
    }
    //Healthbar
    displayHealth = lerp(displayHealth, Math.max(0, Math.min(100, objects[currentObject].health/objects[currentObject].maxHealth*100)), 0.25)
    HEALTHBAR.style.background = `linear-gradient(90deg, ${hslToHex(displayHealth/100*121, 82, 56)} ${displayHealth}%, rgba(0, 0, 0, 0) 0%)`;
    HEALTHDISPLAY.innerHTML = `${formatNum(objects[currentObject].health)}/${formatNum(objects[currentObject].maxHealth)}`;
    //Background gradient
    document.getElementsByTagName('body')[0].style.background = `linear-gradient(${180 + Math.sin(time/2*Math.PI/180)*10}deg, var(--top-gradient) 0%, var(--bottom-gradient) 100%)`;
    time++;
    if (SETTINGSCONTAINER.style.display == 'block') {
        CLICKSSTAT.innerHTML = `Total clicks: ${formatNum(totalClicks)}`;
        TIMESTAT.innerHTML = `Time spent: ${formatTime(timeSpent)}`;
        DESTROYEDSTAT.innerHTML = `Total objects destroyed: ${formatNum(objectsDestroyed)}`;
    }
    if (shakeIntensity > 0) shakeScreen();
    if (flashOpacity > 0) {
        flashOpacity = Math.max(0, flashOpacity - flashDecay);
        FLASHBANG.style.opacity = flashOpacity;
    }
    //Save
    if (time % FPS == 0) {
        save();
    }
}

//Initial code to execute
if (localStorage.saveDataTC) {
    load();
}
loadImages();
addButtonListeners();
updateObject();
setInterval(mainLoop, 1/FPS);
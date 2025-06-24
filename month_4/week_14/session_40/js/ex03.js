console.log('cross of the task');

/**
 * crossOff gedeg funkts bichne uu
 * Enehuu funkts ni tuhain item buyu taskiig darah uyf
 * text-decoration ashiglan dunduur ni zuraastai bolgooroi.
 * li element buriig addEventListener-eer crossOff funktsiig 
 * duuddag bolgooroi.
 * Tegeed herewee tuhain taskiig hiisen bol bas hiigeegui bolgooroi.
 * Uuniig hiihdee style gedeg attribute baigaa esehiig shalgaad 
 * tegeed baigaa bol tuuniig baihgui bolgoh baihgui bol
 * baigaa bolgodog logic 
 */

const lists = document.getElementsByTagName('li')
for (let i = 0; i < lists.length; i++) {
    lists[i].addEventListener('click', function() {
        if (this.style.textDecoration == 'line-through') {
            this.style.textDecoration = 'none'
        }
        else {
            this.style.textDecoration = 'line-through';
            console.log(this.style.textDecoration)
        }
    })
}


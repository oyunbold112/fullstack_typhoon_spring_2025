/**
 * changeColor gedeg ukst bicheed hereglegchees
 * ongiig ni awdag bolgooroi 
 * tegeed tuhain ogogdson div nii ongiin ni hereglegchiin
 * ogson ongoor ni solidog bolgooroi
 * getElementById gedeg selector hereglehgui
 * this gedeg tulhuur ug ashiglan ali div ni we gedgiin olooroi
 */

const divs = document.getElementsByTagName('div')

function changeColor(element) {
    let color = prompt('Ongo')
    element.style.background = color
}

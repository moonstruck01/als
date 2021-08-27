getAccess()
function checkAccess () {
    let access = sessionStorage.getItem('access')
    return access
}

function getAccess () {
    if (checkAccess()) {
        access()
    } else {
        var password = prompt('Enter the Password to access the encoder')
        if (password == araflovessaya) {
            sessionStorage.setItem('access', true)
            access()
        } else {
            getAccess()
        }
    }    
}


    
function access () {
    reload()
    var main = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    var rev = ['261246', '20220', '20000', '02220', '22000', '02200', '20002', '00020', '22200', '20222', '00220', '20022', '22220', '02202', '20020', '02202', '22002', '00002', '00022', '461226', '00222', '20202', '22202', '20020', '02222', '02002']
        
    
    function encipher (text) { 
        text = text.toUpperCase()
        var processedStr, processedText, index
        processedText = ''
        for (let items of text) {
            if (main.includes(items)) {
                index = main.indexOf(items)
                processedStr = rev[index] 
            } else {
                processedStr = items
            }
            processedText += (processedStr + '5')
        }
        return processedText
    }
    
    
    
    function decipher (text) {
    
        var processedStr, processedText, index
        processedText = ''
        for (let items of text.split('5')) {
            if (rev.includes(items)) {
                index = rev.indexOf(items)
                processedStr = main[index]
            } else {
                processedStr = items
            }
            processedText += processedStr
        }
        return processedText
    }
    
    function getOutput () {
        var input = document.querySelector('.user-text').value
        var type = document.querySelector('#select-option').value
    
        if (input === '') {
            document.querySelector('.output').value = 'Nothing to decode or encode!'
        } else if (type === 'encipher') {
            document.querySelector('.output').value = encipher(input)
        } else if (type === 'decipher') {
            document.querySelector('.output').value = decipher(input)
        }
        
        var copyText = document.querySelector('.output')
        copyText.select()
        document.execCommand('copy')
    }
    
    function reload () {
        document.querySelector('.user-text').value = ''
        document.querySelector('.output').value = ''
    }
    
    document.querySelector('.enter').addEventListener('click', getOutput)
    document.addEventListener('keypress', function (e) {
        if (e.keyCode === 13) {
            e.preventDefault()
            getOutput()
        }
    })
    
    document.querySelector('.svg-icon').addEventListener('click', reload)

}






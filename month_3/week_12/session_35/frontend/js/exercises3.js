// dasgal 1
(
    function () {
        let number = 18
        const text = 'I dont give up'
        var isActive = true
        console.log('Dasgal 1: ',number,text,isActive)
    }
)();

// dasgal 2
(
    function () {
        let x,y,z;
        x,y,z = 10
        console.log('Dasgal 2: ',x,y,z)
    }
)();

// dasgal 3

(
    function () {
        let a = 5
        let b = 10
        a = b
        b = a
        console.log('Dasgal 3: ', 'a=',a,'b=',b)

    }
)();

// dasgal 4
(
    function () {
        let score = 10
        score += 5
        score *= 2
        score /= 3
        score -= 4
        console.log('dasgal 4: ', score)
    }
)();

// dasgal 5
        
(
    function () {
       let x = 10
       let y = 5
       x += y
       y += x
       x *= y
       y*=x
       x **= 2
       y **= 5
       y += x
       y *= x
       y /= x
       y %= x
       x %= y
       console.log('dasgal 5: ', x)
    }
)();
        
(
    function () {
       let x = 10.5
       let y = 5.5
       x++
       x--
       y++
       y--
       console.log('dasgal 6: ',x,y)
    }
)();
        
(
    function () {
       let x = 10
       let y = "10"
       
       console.log('dasgal 7: ',typeof x, typeof y)
    }
)();
//  dasgal 8
(
    function () {
       let x = 10
       let y = '10'
       y = parseInt(y)
       console.log(x + y)
    }
)();
        
(
    function () {
        nas = prompt('chi hedtei we?')
        console.log('dasgal 9: ', typeof nas)
        nas += 20
        alert('Horin jiliin daraa 38 hursen baigarai naiza')

    }
)();
        
(
    function () {
       let x = 10
       let y = 20
       console.log('Dasgal 10')
       console.log(x.toString() + y.toString())
       console.log(y.toString() + x.toString())
    }
)();
        
(
    function () {
        let x = 10.8
        let y = 20.5
        console.log('dasgal 11')
        console.log(x + y)
        console.log(x * y)
        console.log(x / y)
        console.log(x % y)
        console.log(x.toString(), y.toString())
        console.log(y.toString(), x.toString())

    }
)();
(
    function () {
        console.log('dasgal 12')
        let a = 10; 
        let b = '20'; 
        let c = 'Hello'; 
        let d = '20.5'; 
        console.log(a * b)
        console.log(a + b)
        c = parseInt(c)
        console.log(isNaN(c))
    }
)();
(
    function () {
        console.log('dasgal 13')
        let x = 10
        let y = 20
        console.log(x.toString()+y.toString())
        console.log(y.toString()+x.toString())
        console.log((x.toString() +y.toString()) / 2)
    }
)();
(
    function () {
        console.log('dasgal 14')
        let a = 10; 
        let b = 20; 
        let c = 5.6; 
        let d = true; 
        let e = 'Hello'; 
        console.log('a-n torol: ', typeof a)
        console.log('b-n torol: ', typeof b)
        console.log('c-n torol: ', typeof c)
        console.log('d-n torol: ', typeof d)
        console.log('e-n torol: ', typeof e)

    }
)();
(
    function () {
        console.log('dasgal 15')
        let firstName = 'John'; 
        let lastName = 'Doe'; 
        console.log(firstName, lastName)

    }
)();
(
    function () {
        console.log('dasgal 16')
        let ner = 'Oyunbold'
        let nas = 18
        let mergejil = 'Hogjuulegch'
        console.log('Namaig ' + ner + ' gedeg. ' + 'bi ' + nas + ' nastai' + ". 2007 ond torson. Minii mergejil bol" + mergejil )
        
    }
)();
(
    function () {
        console.log('dasgal 17')
        let firstName = 'John'; 
        console.log('Hello ' + firstName)
    }
)();
(
    function () {
        console.log('dasgal 18')
        let firstName = 'John'; 
        let lastName = 'Doe'; 
        console.log('Hello ' + firstName, lastName)
    }
)();
(
    function () {
        console.log('dasgal 19')
        let x = 10; 
        let y = 20;
        console.log(x === y
        )
        console.log(x !== y)
        console.log(x < y)
        console.log(x > y)
        console.log(x >= y)
        console.log(x <= y)
    }
)();
(
    function () {
        console.log('dasgal 20')
        ner = prompt('chamaig hen gedeg we?')
        console.log(ner == 'Hello')
    
    }
)();
(
    function () {
        console.log('dasgal 21') 
    }
)();
(
    function () {
        console.log('dasgal 22');
        let numValue = 42; 
        let strValue = "42";
        let comparison1=numValue == strValue
        let comparison2=numValue === strValue
        console.log('sul tentsetgel',comparison1,'haruu tentsetgel: ',comparison2) 
    }
)();
(
    function () {
        console.log('dasgal 23') 
        let age = 25; 
        let minimumAge = 18; 
        let maximumAge = 65;
        let isOldEnough = age > minimumAge
        let isUnderLimit = age < maximumAge
        console.log(age >= minimumAge && age < isUnderLimit)

    }
)();
(
    function () {
        console.log('dasgal 24')
        let value1 = null; 
        let value2 = undefined; 
        let value3 = 0; 
        let value4 = "";
        let nullUndefined = value1 == value2
        let zeroEmpty = value3 === value4
        let nullNotZero = value1 != value3
        console.log("Дасгал 24:", { 
            "null == undefined": nullUndefined, 
            "0 === ''": zeroEmpty, 
            "null != 0": nullNotZero 
            }); 
    }
)();
(
    function () {
        let name1 = "Болд"; 
        let name2 = "Баатар"; 
        let name3 = "болд";
        let alphabeticalOrder = name1 > name2
        let sameNameDifferentCase = name1.toLowerCase() == name3
        console.log("Дасгал 25:", { 
        "цагаан толгойн дараалал": alphabeticalOrder, 
        "том жижиг үсэг хамаагүй": sameNameDifferentCase  }); 
    }
)();
(
    function () {
        let hasUsername = true; 
        let hasPassword = true; 
        let isAdmin = false; 
        let isLoggedIn = true; 
         
        // TODO: Дараах логик илэрхийллүүдийг бич: 
        // 1. Хэрэглэгч нэр, нууц үг хоёулаа байгаа эсэхийг шалга  let canLogin = // Таны код энд 
        let canLogin = hasPassword && hasUsername
        // 2. Хэрэглэгч нэвтэрсэн БА админ эрхтэй эсэхийг шалга  let canAccessAdmin = // Таны код энд 
        let canAccessAdmin = isLoggedIn && isAdmin
        // 3. Хэрэглэгч админ эрхтэй ЭСВЭЛ нэвтэрсэн эсэхийг шалга  let canAccessBasic = // Таны код энд 
        let canAccessBasic = isLoggedIn || isAdmin 

        console.log("Дасгал 26:", { 
        "нэвтрэх боломжтой": canLogin, 
        "админ хандалт": canAccessAdmin, 
        "энгийн хандалт": canAccessBasic 
        });        
    }
)();
(
    function () {
        let score = 85; 
  
        // TODO: Дараах харьцуулалтуудыг бич: 
        // 1. score нь 80-90 хооронд (80, 90-г оролцуулан) байгаа эсэхийг шалга 
        let isB = score >= 80 && score <= 90// Таны код энд 
        // 2. score нь 60-аас бага эсвэл 90-ээс их эсэхийг шалга  let isFailOrA = // Таны код энд 
        let isFailOrA = score < 60 || score > 90
        console.log("Дасгал 27:", { 
        "B үнэлгээ мөн": isB, 
        "F эсвэл A үнэлгээ": isFailOrA
        }); 

    }
)();
(
    function () {
        
        let value1 = ""; 
        let value2 = 0; 
        let value3 = "0"; 
        let value4 = false; 
        
        // TODO: Дараах харьцуулалтуудыг бич: 
        // 1. value1 нь худал утга мөн эсэхийг шалга  let isFalsy1 = // Таны код энд 
        let isFalsy1 = value1 != true
        // 2. value2 ба value4-г == ашиглан харьцуул  let looseComparison = // Таны код энд 
        let looseComparison = value2 == value4
        // 3. value2 ба value3-г != ашиглан харьцуул  let areNotEqual = // Таны код энд 
        let areNotEqual = value2 != value3
        console.log("Дасгал 28:", { 
        "хоосон тэмдэгт мөр худал": isFalsy1,  "0 == false": looseComparison, 
        "0 != '0'": areNotEqual 
        }); 

    }
)();
(
    function () {
        let value1 = "5"; 
        let value2 = 5; 
        let value3 = true; 
        let value4 = "true"; 
        
        // TODO: Дараах харьцуулалтуудыг бич: 
        // 1. value1 ба value2-г == ашиглан харьцуул  let looseEqual = // Таны код энд 
        let looseEqual = value1 == value2
        // 2. value3 ба value4-г == ашиглан харьцуул  let booleanString = // Таны код энд 
        let booleanString = value3 == value4
        // 3. value2 ба value3-г != ашиглан харьцуул  let numberBoolean = // Таны код энд 
        let numberBoolean = value2 != value3
        
        console.log("Дасгал 29:", { 
        "тэмдэгт == тоо": looseEqual, 
        "boolean == тэмдэгт": booleanString,
        }); 

    }
)();
(
    function () {
        let num1 = "123.45"; 
        let num2 = "67"; 
        console.log('dasgal 30: ', (parseFloat(num1) + parseFloat(num2)))
    }
)();
(
    function () {
        let width = 150
        console.log('dasgal 31:', width.toString + 'px')
    }
)();
(
    function () {
        let result1 = 100 / "apple"; 
        let result2 = parseInt("123.45"); 
        let result3 = parseInt("hello"); 
        console.log('Дасгал 32:', result1, result2, result3);
    }
)();
(
    function () {
        let value1 = "5.5"; 
        let value2 = 10; 
        let value3 = "2"
        console.log('dasgal 33', (value1 % 2 * 10 + 0.5))
    }
)();

(
    function () {
        let x = 5; 
        let y = x++; 
        let z = ++x; 
        console.log('dasgal 34', x, y, z)
    }
)();
(
    function () {
        console.log('dasgal 35', 17%5, 2**4, 23%7)
    }
)();
(
    function () {
        x = 100
        x+=5
        x*=2
        x-=8
        x/=3
    }
)();
(
    function () {
        let greeting = "Сайн байна"; 
        let name = "Болд"; 
        let age = 25; 
        console.log(greeting, name, ', ta ' + age + ' nastai!')
    }
)();
(
    function () {
        let num = 5; 
        let str = "5"; 
        console.log(num == str)
        console.log(str === num)
    }
)();
(
    function () {
        let score = 75; 
        console.log(score >= 70)
        console.log(score < 80)
        console.log(score > 60 && score < 80)

    }
)();
(
    function () {
        let age = 25; 
        let hasLicense = true; 
        let hasInsurance = false; 
        console.log(age >= 18 && hasLicense && hasInsurance)
    }
)();
(
    function () {
        let password = 'Nuutsug123'
        console.log(password === password)
        console.log(password.length > 8)
        console.log(password.includes('ug'))
    }
)();
(
    function () {
        let isOnline = true; 
        let isMember = true; 
        let hasPaid = false; 
        console.log(isOnline && isMember && hasPaid)
    }
)();
(
    function () {
        let isAdmin = false; 
        let isModerator = true; 
        let isOwner = false; 
        console.log(isAdmin || isModerator || isOwner)
    }
)();
(
    function () {
        let isBanned = false; 
        let isLoggedIn = true; 
        let isVerified = false; 
        console.log(isBanned !== true, isLoggedIn !== true, isVerified !== true)
    }
)();
(
    function () {
        let hasCoupon = true; 
        let cartTotal = 150000; 
        let isFirstPurchase = false; 
        console.log(hasCoupon || isFirstPurchase, 'total: ', cartTotal - 50000)

    }
)();
(
    function () {
        let temperature = 28;

    }
)();
(
    function () {
        let num1 = 5; // хоёртын системд 101 
        let num2 = 3; // хоёртын системд 011
        console.log(num1 & num2, num1 | num2, num1 ^ num2)
    }
)();
(
    function () {
        let num = 8
        console.log(num >> 1, num << 1)
    }
)();
(
    function () {
        // Дараах илэрхийллүүдийн үр дүнг тооцоолж,  
        // операторуудын гүйцэтгэх дарааллыг тайлбарлана уу 
        let a = 5; 
        let b = 10; 
        let c = 2; 
        let d = 3; 
        // 1. Энгийн илэрхийлэл 
        let result1 = a + b * c; 
        // 2. Хаалттай илэрхийлэл 
        let result2 = (a + b) * c; 
        // 3. Олон операртой илэрхийлэл 
        let result3 = a + b * c / d; 
        // 4. Логик болон арифметик хольсон 
        let result4 = a > b || b / c >= d && d * a < b; 
        // 5. Гурвалсан оператор ба арифметик 
        let result5 = a > b ? c * d : b / c + d; 
        // 10. a, b, c, d ашиглан 55 гэдэг тоог болгох operator цуваа үүсгээрэй.
        let result10 = c * d * b - 5
        console.log('dasgal 50: ', result10)
    }
)();
(
    function () {
        
    }
)();
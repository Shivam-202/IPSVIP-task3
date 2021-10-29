
var finalCap;

function captcha() {
    var random_num = Math.random() * 10000;
    var floor_num = Math.floor(random_num);

    var digit = (num, c = 0) => {
        if (num) {
            return digit(Math.floor(num / 10), ++c);
        };
        return c;
    };

    var count = digit(floor_num);

    if (count == 3) {
        finalCap = floor_num + "0";
    }
    else if (count == 2) {
        finalCap = "0" + floor_num + "0";
    }
    else {
        finalCap = floor_num;
    }

    document.getElementById('capch').value = finalCap;
}


function details() {

    var finame = document.getElementById('fname').value;
    let password1 = document.getElementById('pass1').value;
    let password2 = document.getElementById('pass2').value;
    let mobileno = document.getElementById('mobileno').value;
    let captch = document.getElementById('entcapch').value;
   
    if (finame.length == 0 || password1.length == 0 || password2.length == 0 || mobileno.length == 0 || captch.length == 0) {
        alert("Fill the All Ditails");
    }
    else {

        if (password1 == password2) {
            if (mobileno.length == 10) {
                if (finalCap == captch) {
                    var url = "/Login Authentication Task/loginsuccess.html";
                    document.getElementById('login-btn').href = url;
                }
                else {
                    alert("Captcha Wrong");
                }
            }
            else{
                alert("Mobile Number Should be 10 Digits");
            }
        } else {
            alert("Password Not Same");
        }

    }

    
   
}



// **************************************************************************************
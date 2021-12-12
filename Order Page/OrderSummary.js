// JavaScript source code
function VarifyInput(fullname,city,zipcode,phonenumber,email,cardnumber,ccv,CHID,coupon){

    var emailID = email;
         atpos = emailID.indexOf("@");
         dotpos = emailID.lastIndexOf(".");

    if (atpos < 1 || ( dotpos - atpos < 2 )){window.alert('Invalid email'); return;}
    if ( fullname.length <5 ) { window.alert('Invalid name'); return;}
    if ( zipcode.length !=7 ) { window.alert('Invalid zipcode'); return;}
    if ( city.length <3 ) { window.alert('Invalid City'); return;}
    if ( phonenumber.length <10 ) { window.alert('Invalid Phone number'); return;}
    if ( cardnumber.length !=16 && (cardnumber.length!=12) ) { window.alert('Invalid Credit Card'); return;}
    if ( ccv.length !=3 ) { window.alert('Invalid CCV'); return;}
    if ( CHID.length <7 ) { window.alert('Invalid Credit Card information'); return;}
    if ( coupon !="123ez" && (coupon !='' )) { window.alert('Invalid coupon'); return;}

    window.alert('Order submitted! Thank you!');

        return;



}
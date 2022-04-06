let loginPage = `
                <span class="close-btn" id="close_btn" onclick="closeModal('signup-login-modal')">&times;</span>
                <div class="login-form py-1">
                    <div class="row justify-content-center">
                        <div class="col-xs-10 col-sm-10 col-md-10 col-lg-9">
                            <h2 class="h3 my-2 text-align-center">تسجيل الدخول</h2>
                            <form action="" class="flex-col">
                                <div class="form-control mt-1">
                                    <label for="emailOrMobile"></label>
                                    <input id="emailOrMobile" type="text" name="emailOrMobile" placeholder="رقم الجوال" />
                                </div>
                                <div class="form-control mt-1">
                                    <label for="password"></label>
                                    <input id="password" type="password" name="password" placeholder="كلمة السر" />
                                </div>
                                <div class="form-control mt-1">
                                    <input type="submit" class="text-align-center w-100" value="تسجيل الدخول" />
                                </div>
                            </form>
                            <div class="have-account text-align-center pb-2">
                                <p>ليس لديك حساب؟</p>
                                <button class="btn" onclick="openModal('signup-login-modal', 'signupForm')">إنشاء حساب جديد</button>
                            </div>
                        </div>
                    </div>
                </div>
               `;
let signupPage = `
                <span class="close-btn" id="close_btn" onclick="closeModal('signup-login-modal')">&times;</span>
                <div class="signup-form py-2">
                    <div class="row justify-content-center">
                        <div class="col-xs-10 col-sm-10 col-md-10 col-lg-9">
                            <h2 class="h3 my-2 text-align-center">إنشاء حساب</h2>
                            <form action="" class="flex-col">
                                <div class="form-control mt-1">
                                    <label for="mobileNo"></label>
                                    <input id="mobileNo" type="number" name="mobileNo" placeholder="رقم الجوال"
                                        class="me-auto" />
                                    <label for="countryCode"></label>
                                    <input id="countryCode" type="text" name="countryCode" placeholder="رمز البلد"
                                        class="mr-1" />
                                </div>
                                <p class="mt-1">
                                    سوف نرسل لك
                                    <b>رمز التحقق عن طريق رسالة نصية</b>
                                </p>
                                <div class="form-control mt-1">
                                    <label for="confirmCode"></label>
                                    <input id="confirmCode" type="text" name="confirmCode" placeholder="ادخل رمز التحقق" />
                                </div>
                                <div class="form-control mt-1">
                                    <label for="firstName"></label>
                                    <input id="firstName" type="text" name="firstName" placeholder="ادخل الاسم الأول" />
                                </div>
                                <div class="form-control mt-1">
                                    <label for="lastName"></label>
                                    <input id="lastName" type="text" name="lastName" placeholder="ادخل اللقب" />
                                </div>
                                <div class="form-control mt-1">
                                    <label for="email1"></label>
                                    <input id="email1" type="email" name="email1" placeholder="البريد الالكتروني" />
                                </div>
                                <div class="form-control mt-1">
                                    <label for="email2"></label>
                                    <input id="email2" type="email" name="email2" placeholder="تأكيد البريد الالكتروني" />
                                </div>
                                <div class="form-control mt-1">
                                    <label for="password"></label>
                                    <input id="password" type="password" name="password" placeholder="كلمة السر" />
                                </div>
                                <div class="form-control mt-1">
                                    <input id="cbx-privacy" type="checkbox" checked />
                                    <label for="cbx-privacy"></label>
                                    <p class="pr-1">
                                        أوافق على
                                        <a href="https://www.jarir.com/terms_and_conditions" target="_blank">
                                            <b>على الشروط والأحكام</b>
                                        </a>
                                    </p>
                                </div>
                                <div class="form-control mt-1">
                                    <input id="cbx-subscribe" type="checkbox" checked />
                                    <label for="cbx-subscribe"></label>
                                    <p class="pr-1"> أوافق للانضمام للنشرة البريدية</p>
                                </div>
                                <div class="form-control mt-1">
                                    <input type="submit" class="w-100 text-align-center" value="إنشاء حساب" />
                                </div>
                            </form>
                            <span class="text-align-center d-block mt-2 my-2">
                                لديك حساب؟
                                <span onclick="openModal('signup-login-modal', 'loginForm')" class="link">تسجيل الدخول</span>
                            </span>
                        </div>
                    </div>
                </div>
                `;

var signup_login_modal = document.getElementById("signup-login-modal");
var slideshow_modal = document.getElementById("slideShowModal");
// var open_slideShow_modal = document.getElementById("openSlideshowModal");
// var loginElem = document.getElementById("openLoginModal");
// var signupElem = document.getElementById("openSignupModal");
var closeBTN = document.getElementById('close_btn');

function openModal(modalName, ...other){
    document.getElementById(modalName).style.display = "flex";
    if(modalName == "signup-login-modal"){
        if(other == "loginForm")
            document.getElementById('signup-login-modal-content').innerHTML = loginPage;
        else 
            document.getElementById('signup-login-modal-content').innerHTML = signupPage;     
    }
}
function closeModal(modalName){
    document.getElementById(modalName).style.display = "none";
}

window.onclick = function(event) {
  if (event.target == signup_login_modal || event.target == slideshow_modal) {
    event.target.style.display = "none";
  }
}
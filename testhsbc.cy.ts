import Homepage from './Homepage.cy';
import Logonpage from './Logonpage.cy';

describe('Login', () => {
  let userdata : {email : any; };
  before(function(){
    cy.fixture('example').then(function(data){
      userdata = data;
      return userdata;
  })
})



  it('Visits the Home page', () => {
    const home = new Homepage();
    const logon= new Logonpage();
    home.visit();
    home.Validatetitle();
    home.clickLogonButton();
    logon.checkLogo();
    logon.checkCoutinueButtonStatus();
    logon.checkRemCBIUnchecked();
    logon.checkUserNameBlank();
    logon.enterUserName(userdata.email);
    logon.Clickicon();
    logon.Clickdeleteicon();
    logon.checkRemCBIchecked();



  })
})


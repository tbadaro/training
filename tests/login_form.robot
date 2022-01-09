*** Settings ***
Resource            base.robot

Test Setup          Nova sessão
Test Teardown       Encerra sessão

*** Test Cases ***
Preenche formulário de login
    Go To                           ${url}/login
    Login With                      stark                       jarvis!

    Should See Logged user          Tony Stark

Senha Inválida
    [tags]                          password_error
    Go To                           ${url}/login
    Login With                      stark                       abc123

    Should Contain Login Alert      Senha é invalida
    
Usuário Inválido
    [tags]                          user_error
    Go To                           ${url}/login
    Login With                      hankpym                     yellowjacket  

    Should Contain Login Alert      O usuário informado não está cadastrado!           

*** Keywords ***
Login With
    [Arguments]     ${uname}   ${pass}

    Input Text                      css:input[name=username]    ${uname}
    Input Text                      css:input[name=password]    ${pass}
    Click Element                   class:btn-login

Should Contain Login Alert
    [Arguments]                     ${expected_message}

    ${message}=                     Get Web Element             id:flash
    Should Contain                  ${message.text}             ${expected_message}

Should See Logged user
    [Arguments]                     ${full_name}

    Page Should Contain             Olá, ${full_name}. Você acessou a área logada!

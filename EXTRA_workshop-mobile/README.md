# pgats - Extra: Workshop Prático - Automação Mobile | com QAZando

<p align="left">
<a href="https://appium.io/" target="_blank" rel="noreferrer"> <img src="https://avatars.githubusercontent.com/u/3221291?s=200&v=4" alt="appium" width="45" height="45"/></a> 
<a href="https://webdriver.io/" target="_blank" rel="noreferrer"> <img src="https://avatars.githubusercontent.com/u/6512473?s=200&v=4" alt="webdriverio" width="45" height="45"/></a> 
<a href="https://developer.android.com/studio?hl=pt-br" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/github/explore/44926f43f6a0d183b5965bebd1e77069ab00c26a/topics/android-studio/android-studio.png" alt="androidstudio" width="45" height="45"/></a> 
</p>

Projeto desenvolvido na disciplina Automação em Testes Mobile da Pós-Graduação em Automação de Testes de Software, com o objetivo de explorar e aplicar automação de testes em dispositivos móveis.

#### Ferramentas Utilizadas
- **Appium** ferramenta de código aberto para automação de interface em diversas plataformas, incluindo dispositivos móveis (iOS, Android), navegadores, desktops (macOS, Windows), e TVs (Roku, Android TV, Samsung).
- **WebdriverIO** (https://webdriver.io/) é um framework de automação para aplicativos móveis e web modernos, que oferece plugins para facilitar a criação de testes escaláveis e robustos. Esse é o nosso CLIENT!

#### Pré-requisitos ☕
1. Instale o [node.js](https://nodejs.org/pt)
2. Instale o [Java SE Development Kit](https://www.oracle.com/br/java/technologies/javase/javase8-archive-downloads.html)
3. Instale e configure o [Android Studio](#configuração-do-android-studio)
4. Configure as [variáveis de ambiente](#configuração-das-variáveis-de-ambiente)
5. Crie o [device no Android Studio](#criar-device-no-android-studio)
6. Instale e configure o [Appium](#instale-e-configure-o-appium)
7. Instale as dependências do projeto com o comando ``npm install``

#### Configuração do Android Studio
1. Instale o [Android Studio](https://developer.android.com/studio?hl=pt-br).
2. Abra o Android Studio, crie um novo projeto selecionando `No Activity` e mantenha as demais configurações padrão. Clique em `Finish`.
3. Em seguida, vá em `File` > `Settings` > `Languages & Frameworks` > `Android SDK` > `SDK Tools` e verifique se os itens abaixo estão habilitados:
   - Android SDK Build-Tools
   - Android Emulator
   - Android SDK Platform-Tools
   - Intel x86 Emulator Accelerator (HAXM)
4. Clique em `Apply` e `OK` para aplicar as configurações.


#### Configuração das variáveis de ambiente
1. Abra o menu iniciar e pesquise por "Editar as variáveis de ambiente do sistema".
2. Clique na aba `Avançado` > `Variáveis de Ambiente`.
3. Adicione as seguintes variáveis na seção de `Variáveis do sistema`:<br>
![variaveisSistema](https://github.com/user-attachments/assets/4dae0f35-0593-4066-9add-cddd542b34e3)<br>
Obs.: Dentro do diretório `C:\Users\{Nome_seu_user}` há uma pasta oculta chamada `AppData`
4. Após instalar o Java jdk 8 (Java SE Development Kit 8), adicione a variável `JAVA_HOME` com o diretório do Jdk instalado.<br>
![variaveisSistema2](https://github.com/user-attachments/assets/21662b2f-585b-4024-bcb5-7c51db275c5c)<br>
Obs.: No terminal, verifique a versão do Java com `java -version` para garantir que o JDK foi instalado corretamente.
5.  Nas variáveis de ambiente, edite a variável `Path` e adicione os seguintes valores:
- `%JAVA_HOME%\bin`
- `%ANDROID_HOME%\tools`
- `%ANDROID_HOME%\platform-tools`<br>
![variaveisSistema3](https://github.com/user-attachments/assets/dced6eed-a3ac-4504-9aad-9094f9c9976e)
6. Clique em `OK` para salvar as variáveis adicionadas.<br>
Obs.: Para validar se as variáveis estão configuradas corretamente, execute os comandos abaixo no terminal para garantir que nenhum erro seja retornado:
```bash
cd %ANDROID_HOME%\tools
%JAVA_HOME%\bin
cd %ANDROID_HOME%\platform-tools
```

#### Criar device no Android Studio
1. No Android Studio com o projeto aberto, clique em `Tools` > `Device Manager` > `+` > `Create Virtual Device`.
2. Selecione `Phone` > `Nexus 6` > `Next`.
3. Escolha `Oreo 26` como versão e clique em `Next` > `Finish`.
4. Para iniciar o device criado, clique no botão de `Play`.
5. Após iniciar o emulador, você poderá instalar o APK da aplicação que será testada.

#### Instale e configure o Appium
1. No terminal, digite os seguintes comandos para instalar o Appium:
```bash
npm install -g appium
npm install -g appium-doctor
appium driver install uiautomator2
```
2. Instale o [Appium Inspector](https://github.com/appium/appium-inspector/releases) para inspecionar elementos da interface.
3. Abra o Appium, com o comando `appium --allow-cors` no terminal.
3. Configure o Appium Inspector com as seguintes informações:
```json
{
  "platformName": "Android",
  "automationName": "UiAutomator2"
}
OBS: O Appium Inspector pode ser acessado localmente ou através da URL: https://inspector.appiumpro.com/
```

#### Subir o ambiente e rodar os testes
1. Inicie o emulador Android criado no Android Studio.
2. No terminal, execute o comando `appium --allow-cors` para iniciar o servidor do Appium.
3. Em outro terminal, execute os testes com o comando `npm run test:android`

PRONTO! Esses passos configuram o ambiente para rodar testes automatizados mobile com WebdriverIO e Appium.
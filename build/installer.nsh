!macro customInstall
   SetRegView 64
   WriteRegStr HKCR "*\shell\demoUnique" "" "open with demoUnique"
   WriteRegStr HKCR "*\shell\demoUnique" "Icon" "$INSTDIR\demoUnique Setup 0.1.0.exe"
   WriteRegStr HKCR "*\shell\demoUnique\command" "" '"$INSTDIR\demoUnique Setup 0.1.0.exe" "upload" "%1"'
   SetRegView 32
   WriteRegStr HKCR "*\shell\demoUnique" "" "open with demoUnique"
   WriteRegStr HKCR "*\shell\demoUnique" "Icon" "$INSTDIR\demoUnique Setup 0.1.0.exe"
   WriteRegStr HKCR "*\shell\demoUnique\command" "" '"$INSTDIR\demoUnique Setup 0.1.0.exe" "upload" "%1"'
!macroend
!macro customUninstall
   DeleteRegKey HKCR "*\shell\demoUnique"
!macroend

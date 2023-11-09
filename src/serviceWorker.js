 renewSession() => {
   const interval = setInterval(() => {
     const shouldRenewSession = this.isLoggedIn &&
       (!this.idToken || this.isExpired());
 
     if (window.navigator.onLine && shouldRenewSession) {
       this.auth0.checkSession({}, (err, authResult) => {
         if (authResult && authResult.accessToken && authResult.idToken) {
           this.setSession(authResult);
         } else if (err) {
           this.logout();
           console.log(err);
           alert(`Could not get token (${err.error}: ${err.error_description}).`);
         }
       });
     }
   }, 5000);
 }

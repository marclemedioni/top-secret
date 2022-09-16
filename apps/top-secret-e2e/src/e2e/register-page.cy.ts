describe('register page', () => {
    before(() => { 
        cy.visit('/#/register')    
    })

    it('shows register page', ()=> {
        //vérifier que h1 + new account présent. 
        // vérifier la présence du formulaire avec (Ts-register-form)
    })

    it('it requires valid form', () => {
        // cliquer sur le bouton submit 
        // vérifier 1/1 champ class ng-invalid
        // cgu checkbox (dur)
        
    })

    it('it allows to page register', () => {
        //voir pour créer constante create user ou faire mano 
        // remplir les champs
        //Cliquer sur la checkbox 
        // submit avec bouton 
        // vérifier que page suivante est correctement affichée 
    
    })
describe('user name input', () => {
    it('should be required',()=> {
    // cliquer sur le champ username et quitter le champ et vérifier 
    //que le message d'alerte qui est required (message en dur)
    })

    it('should have min length', () => {
//taper 1 seul caractére dans le champ et vérifier que message pour 2min s'affiche 
    })

    it('should have max lenght', () => {
// taper 255 caractères et vérifier si message erreur ok          
    })

    it('should not include space', () => {
// inclure un username avec espace et vérifier que message erreur ok 
//taper un espace quitter le champ et vérifier après
    })
})
    
})
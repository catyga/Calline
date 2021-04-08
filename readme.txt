Général :
  - changer nom du site au niveau de l'onglet :

          remplacer DANS CHAQUE PAGE HTML le texte entre <title> et </title> (généralement au début du code) (par défaut : "Test Sylvain")

  - changer icône du site au niveau de l'onglet :

          télécharger l'image souhaité (format PNG) sous le nom "icon" dans le dossier

  - changer le nom en haut à gauche :

          remplacer DANS CHAQUE PAGE HTML le texte entre <a href="#" class="logo"> et </a> (en-dessous de <header>)

  - changer le texte, les titres, sous-titres,... :

          remplacer le Lorem ipsum par le texte et les "TITRE" et "Sous-titre" par les éléments correspondant


Accueil :

  - changer l'image sur la page d'accueil :

          télécharger une image et l'appeler "1"


Bio :

- changer l'image sur la page de bio :

        télécharger une image et l'appeler "profil"

Page avec les images :

   - changer le titre et la description des images :

          remplacer "Titre image" par le titre de l'image et le Lorem ipsum par la description de l'image

   - rajouter des images :

          télécharger l'image que l'on veut rajouter puis copier le paragraphe suivant :

          <div class="box">
            <div class="imgBx">
              <img src="XXX">  <!-- remplacer XXX par le nom de l'image avec son extension-->
              <h2>Cliquez pour fermer</h2>
              <div class="content">
                <h3>Titre image</h3>
                <p>Description image</p>
                </div>
              </div>
            </div>

          (NE PAS OUBLIER D'ECRIRE LE NOM DE L'IMAGE A LA PLACE DE XXX)

          copier le paragraphe ci-dessus au niveau des indications "/*rajouter image ici*/" dans le code

    - changer une image :

        télécharger l'image qui doit remplacer l'image puis remplacer dans <img src="exemple.jpg"> la valeur de l'attribut "src" par le nom de l'image qui doit la remplacer (exemple.jpg représente l'ancienne image, que l'on va remplacer le nom de la nouvelle image (mettre .png ou .jpg en fonction de l'extension de l'image))

    - rajouter une période :

        rajouter à la fin du document, avant </section>, le paragraphe suivant :

        <div class="period" id="XXX"> <!-- changer XXX par ce que l'on veut -->
          <h1>Nom de la période</h1>
        </div>

        puis copier-coller entre <h1>Nom de la période</h1> et </div> le paragraphe pour rajouter une image
        Ensuite, aller au tout début du document, chercher la liste qui commence par <ul class="sousmenu"> et avant </ul> copier cette ligne DANS CHAQUE PAGE HTML ! :

        <li><a href="images.html#XXX">Nom de la période</a></li>

        NE PAS OUBLIER DE REMPLACER LES XXX par le même élement. Attention, les XXX de deux périodes différentes NE DOIVENT PAS avoir le même nom.


  Contact :

    - paramétrer le mail :

        dans le code html, chercher la ligne suivante :

        <li><a href="mailto:XXX?subject=contact"><i class="fa fa-envelope-o" aria-hidden="true"></i></a></li>

        et remplacer XXX par l'adresse mail que l'on souhaite enregistrer

    - paramétrer whatsapp :

        dans le code html, chercher la ligne suivante :

        <li><a href="https://wa.me/33XXX"><i class="fa fa-whatsapp" aria-hidden="true"></i></a></li>

        et remplacer XXX par le numéro de téléphone SANS LE 0 !
        (exemple si le numéro est 0612345678, alors je remplace XXX par 612345678)

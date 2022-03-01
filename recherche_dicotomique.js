/**val = valeur recherchee,tab = tableau trier
 * 
 * si tab est vide : return false;
 * si tab contient 1 element:return val == tab[0]
 * si tab contient 1 elements ou plus:
 * - verifier si le milieu du tbleau(tab.length-1) 
 * - si oui ==> return true 
 * - sinon, on va rechercher l'element dans une des 2 moitier du tableau :
 * si tab est vide : ..., si tab contient 1 element ... etc
 * 
 * tab.slice:permet de decouper un tableau
 * tab.slice(x)
 * tab.slice(x,y)
 */
let tableau = []

function recherche(tab,val){
    if(tab.length==0){
        return false
    }
    if(tab.length==1 && tab[0]==val){
        return true
    }
    if(tab.length==1 && tab[0]!=val){
        return false
    }
    //sans echec
    if(tab.length%2 != 0){
            if(tab[(tab.length-1)/2] == val){
                return true
            }
            if(tab[(tab.length-1)/2] > val){
               return recherche(tab.slice(0,(tab.length-1)/2),val)
            }
            if(tab[(tab.length-1)/2] < val){
               return recherche(tab.slice(((tab.length-1)/2),(tab.length+1)),val)
            }
    }
    if(tab.length%2 == 0){
        if(tab[(tab.length)/2] == val){
            return true
        }
        if(tab[((tab.length)/2)] > val){
           return recherche(tab.slice(0,(tab.length)/2),val)
        }
        if(tab[((tab.length)/2)] < val){
           return recherche(tab.slice((tab.length)/2,(tab.length+1)),val)
        }
}
//sans echec
}
console.log(recherche(tableau,1))
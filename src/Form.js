
import React from "react";
function Form(){
    return(
        <div>
            <h1>inscription</h1>
            <form>
                <table>
                    <tr><td><label>l'identifiant</label></td>
                    <td><input type="text"></input></td>
                </tr>
                <tr><td><label>mot de passe</label></td>
                    <td><input type="password"></input></td>
                </tr>
                <tr><td><label>date de naissanc</label></td>
                    <td><input type="date"></input></td>
                </tr>
                <tr><td><label>ville</label></td>
                    <td><select><option>casablanca</option>
                    <option>tanger</option></select></td>
                </tr>
                <tr>
                    <td><label>genre</label></td>
                    <td><label>homme</label></td>
                    <td><input type="radio" value="homme"></input></td>
                    <td><label>femme</label></td>
                    <td><input type="radio" value="femme"></input></td>
                </tr>


                </table>
            </form>
        </div>
        

    )
}
export default Form;
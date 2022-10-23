<template>
    <div>
        <form id="workout" action="/useractivty" method="post">
            <fieldset id="fieldset1">
                <legend>Add Workout</legend>
                <div class="field">
                    <label for="title">Title:</label>
                    <input type="text" name="title" id="title">
                </div>
                <div class="field">
                    <label for="date">Date:</label>
                    <input type="text" name="date" id="date" placeholder="mm/dd/yyyy">
                </div>
                <div class="field">
                    <label for="duration">Duration:</label>
                    <input type="text" name="duration" id="duration" placeholder="ex: 15 minutes">
                </div>
                <div class="field">
                    <label for="location">Location:</label>
                    <input type="text" name="location:" id="location">
                </div>
                <div class="field">
                    <label>Type:</label>
                    <label for = "RunR"> Run</label>
                        <input type="checkbox" name ="RunR" id = "RunR" value="RunR">
                    <label for = "BikeR"> Bike</label>
                        <input type="checkbox" name ="BikeR" id = "BikeR" value="BikeR">
                    <label for = "WalkR"> Walk</label>
                        <input type="checkbox" name ="WalkR" id = "WalkR" value="WalkR">
                    <label for = "SwimmingR"> Swimming</label>
                        <input type="checkbox" name="SwimmingR" id = "SwimmingR" value="SwimmingR">
                    <label for = "StrengthR"> Strength</label>
                        <input type="checkbox" name="StrengthR" id= "StrengthR" value="StrengthR">
                </div>
            </fieldset>
        </form>
        <form id="save" action="/useractivty" method="post">
            <div id="save">
                <fieldset id="fieldset2">
                    <input type="submit" id="saveButton" value="Save Changes">
                    <input type="reset" id="cancelButton" value="Cancel">
                </fieldset>
            </div>
        </form>
    </div>
</template>
import { FormGroup } from "@angular/forms";

interface ComponentsData {
    M: boolean;
    MDetails: string;
    S: boolean;
    V: boolean;
}

class Component {

    constructor(
        public M: boolean,
        public MDetails: string,
        public S: boolean,
        public V: boolean,
    ){}
}

export interface SpellData {
    CastTime: string;
    Classes: string;
    Components: ComponentsData;
    Desc: string;
    Duration: string;
    IsRitual: boolean;
    Level: number;
    Name: string;
    Range: string;
    School: string;
}

export class Spell {
    
    static arrayFormToString( form: string[], srd: boolean ): string {
        let result: string = form.join(', ');
        if (srd) result = result + ', SRD';
        return result;
    }

    static durationString( desc: string, concentration: boolean ): string {
        let result: string = "";
        if (concentration) result = result + "Concentration, up to ";
        result = result + desc;
        return result;
    }

    static spellDesdeJson( obj: SpellData, index: number ){
        return new Spell (
            index,
            obj['CastTime'],
            obj['Classes'],
            obj['Components'],
            obj['Desc'],
            obj['Duration'],
            obj['IsRitual'],
            obj['Level'],
            obj['Name'],
            obj['Range'],
            obj['School'],
        )
    }

    static spellDesdeFormGroup( form: FormGroup, index: number ){
        const classes: string = this.arrayFormToString(form.controls['Classes'].value, form.controls['SRD'].value)
        const components: ComponentsData = new Component(
            form.controls['MComponent'].value,
            form.controls['Material'].value,
            form.controls['SComponent'].value,
            form.controls['VComponent'].value,
        );
        const desc: string = form.controls['Desc'].value.replace("\n", "|").replace("\n\n", "||") + "|||At higher level: " +  form.controls['AtHighLevel'].value.replace("\n", "|").replace("\n\n", "||")
        const duration: string = this.durationString(form.controls['Duration'].value, form.controls['Concentration'].value);

        return new Spell (
            index,
            form.controls['CastTime'].value,
            classes,
            components,
            desc,
            duration,
            form.controls['IsRitual'].value,
            form.controls['Level'].value,
            form.controls['Name'].value,
            form.controls['Range'].value,
            form.controls['School'].value,
        )

    }

    constructor(
        public ID:          number,
        public CastTime:    string,
        public Classes:     string,
        public Components:  ComponentsData,
        public Desc:        string,
        public Duration:    string,
        public IsRitual:    boolean,
        public Level:       number,
        public Name:        string,
        public Range:       string,
        public School:      string,
    ){}

}
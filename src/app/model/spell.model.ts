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
        const classes: string = form.controls['MComponent'].value.join;
        const components: ComponentsData = new Component(
            form.controls['MComponent'].value,
            form.controls['Material'].value,
            form.controls['SComponent'].value,
            form.controls['VComponent'].value,
        );
        const desc: string = "";
        const duration: string = "";

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

    private arrayFormToString( form: any ): string {
        
    }
}
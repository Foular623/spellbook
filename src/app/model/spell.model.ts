interface Components {
    M: boolean;
    MDetails: string;
    S: boolean;
    V: boolean;
}

export interface SpellData {
    CastTime: string;
    Classes: string;
    Components: Components;
    Desc: string;
    Duration: string;
    IsRitual: boolean;
    Level: number;
    Name: string;
    Range: string;
    School: string;
}

export class Spell {

    static spellDesdeJson( obj: SpellData ){
        return new Spell (
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

    constructor(
        public CastTime:    string,
        public Classes:     string,
        public Components:  Components,
        public Desc:        string,
        public Duration:    string,
        public IsRitual:    boolean,
        public Level:       number,
        public Name:        string,
        public Range:       string,
        public School:      string,
    ){}
}
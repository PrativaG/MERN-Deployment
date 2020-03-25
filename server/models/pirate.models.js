const mongoose = require("mongoose");

const PirateSchema = new mongoose.Schema({
    name:{
        type: String,
        required:[
            true,
            "Name is required"
        ]
    },
    imageUrl:{
        type: String,
        minlength: [
            5
        ],
        required:[
            true,
            "Image is required"
        ]
        
    },
    treasures:{
        type: Number,
        required:[
            true,
            "Treasures is required"
        ]
    },
    catchPhrase:{
        type: String,
        required:[
            true,
            "Phrase is required"
        ]
    },
    position:{
        type: String,
        required:[
            true,
            "Position is required"
        ]
    },
    pegLeg:{
        type: String,
        default:  "true"
    },
    eyePatch:{
        type: String,
        default:  "true"
    },
    hookHand:{
        type: String,
        default:  "true"
    }

}, {timestamps: true});

const Pirate = mongoose.model('Pirate', PirateSchema);
module.exports = Pirate;

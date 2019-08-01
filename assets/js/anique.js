import * as anime from 'animejs';

//structure
// [
//     parralel functions
//     @elem,
//     @elem = {
//
//     }
// ]
function AniqueElement() {
    this.data = {

        name: null,
        offset: 0,
        call: null,
        alternateCall: null,
        purge: null,
        delay: 0,
        disabled: false,
        next: [],
        backtrack: "" //TODO: сделать механизм бектрека отсутствия очисток в виде компонент -> анимация -> анимация -> ...
    }

};



AniqueElement.prototype.setName = function(name) {
    this.data.name = name;
    return this;
};

AniqueElement.prototype.setOffset = function(offset) {
    this.data.offset = offset;
    return this;
};

AniqueElement.prototype.setCall = function(call) {
    this.data.call = call;
    return this;
};

AniqueElement.prototype.setPurge = function(purge) {
    this.data.purge = purge;
    return this;
};

AniqueElement.prototype.setAlternateCall = function(alternateCall) {
    this.data.alternateCall = alternateCall;
    return this;
};

AniqueElement.prototype.setDisabled = function(disabled) {
    this.data.disabled = disabled;
    return this;
};

AniqueElement.prototype.setNext = function(next) {
    for(let i in next) {
        this.data.next.push(
            new AniqueElement()
                .setName(next[i].name || 'no name')
                .setOffset(next[i].offset || 0)
                .setCall(next[i].call || function () {})
                .setAlternateCall(next[i].alternateCall || null)
                .setDelay(next[i].delay || 0)
                .setPurge(next[i].purge || function () {})
                .setNext(next[i].next || [])
                .setDisabled(next[i].disabled || false)
        );
    }
    return this;
};

AniqueElement.prototype.setDelay = function(delay) {
    this.data.delay = delay;
    return this;
};

AniqueElement.prototype.rock = function(move_type) {
    let {
        call,
        next,
        delay,
        disabled,
        alternateCall
    } = this.data;

    if (!disabled) {
        if (move_type == 'swipe' || (move_type != 'swipe' && alternateCall == null)) {
            call();
        } else {
            alternateCall();
        }
    }
    for(let i in next) {
        setTimeout(()=>{
            next[i].rock(move_type);
        }, delay + next[i].data.offset)
    };
};

AniqueElement.prototype.clearGarbage = function() {
    let {
        purge,
        next,
        name,
        disabled
    } = this.data;

    if (purge != null) {
        if (!disabled) {
            purge();
        }
    } else {
        console.log('WARNING! function ', name, 'doesent have purge effect! current')
    }
    for(let i in next) {
        next[i].clearGarbage();
    }
};

export default function Anique() {
    this.collection = [];
}

Anique.prototype.add = function(data) {
    this.collection.push(
        new AniqueElement()
            .setName(data.name || 'no name')
            .setCall(data.call || function () {})
            .setAlternateCall(data.alternateCall || null)
            .setDelay(data.delay || 0)
            .setPurge(data.purge || function () {})
            .setNext(data.next || [])
    );
    return this;
};

Anique.prototype.start = function(move_type = 'swipe') {
    for (let i in this.collection) {
        this.collection[i].rock(move_type);
    }
};

Anique.prototype.destroy = function() {
    for (let i in this.collection) {
        this.collection[i].clearGarbage();
    }
};
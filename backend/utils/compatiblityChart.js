const CompatiblityChart = {
    "INFP": {
        0: ["ENFJ", "ENTJ"],
        1: ["INFP", "ENFP", "INFJ", "INTJ", "INTP", "ENTP"]
    },
    "ENFP": {
        0: ["INFJ", "INTJ"],
        1: ["INFP", "ENFP", "ENFJ", "ENTJ", "INTP", "ENTP"]
    },
    "INFJ": {
        0: ["ENFP", "ENTP"],
        1: ["INFP", "INFJ", "ENFJ", "INTJ", "ENTJ", "INTP"]
    },
    "ENFJ": {
        0: ["INFP", "ISFP"],
        1: ["ENFP", "INFJ", "ENFJ", "INTJ", "ENTJ", "INTP", "ENTP"]
    },
    "INTJ": {
        0: ["ENFP", "ENTP"],
        1: [ "INFP", "INFJ", "ENFJ", "INTJ", "ENTJ", "INTP"]
    },
    "ENTJ": {
        0: ["INFP", "INTP"],
        1: ["ENFP", "INFJ", "ENFJ", "INTJ", "ENTJ", "ENTP"]
    },
    "INTP": {
        0: ["ENTJ", "ESTJ"],
        1: ["INFP", "ENFP", "INFJ", "ENFJ", "INTJ", "INTP", "ENTP"]
    },
    "ENTP": {
        0: ["INFJ", "INTJ"],
        1: ["INFP", "ENFP", "ENFJ", "ENTJ", "INTP", "ENTP"]
    },
    "ISFP": {
        0: ["ENFJ", "ESFJ", "ESTJ"],
        1: ["INTJ", "ENTJ", "INTP", "ENTP", "ISFJ", "ISTJ"]
    },
    "ESFP": {
        0: ["ISFJ", "ISTJ"],
        1: ["INTJ", "ENTJ", "INTP", "ENTP", "ESFJ", "ESTJ"]
    },
    "ISTP": {
        0: ["ESFJ", "ESTJ"],
        1: ["INTJ", "ENTJ", "INTP", "ENTP", "ISFJ", "ISTJ"]
    },
    "ESTP": {
        0: ["ISFJ", "ISTJ"],
        1: ["INTJ", "ENTJ", "INTP", "ENTP", "ESFJ", "ESTJ"]
    },
    "ISFJ": {
        0: ["ESFP", "ESTP"],
        1: ["ENTJ", "ISFP", "ISTP"]
    },
    "ESFJ": {
        0: ["ISFP", "ISTP"],
        1: ["ENTJ", "ESFP", "ESTP"]
    },
    "ISTJ": {
        0: ["ESFP", "ESTP"],
        1: ["ENTJ", "ISFP", "ISTP"]
    },
    "ESTJ": {
        0: ["INTP", "ISFP", "ISTP"],
        1: ["ENTJ", "ESFP", "ESTP"]
    },
    "All": {
        0: ["INFP", "ENFP", "INFJ", "ENFJ", "INTJ", "ENTJ", "INTP", "ENTP", "ISFP", "ESFP", "ISTP", "ESTP", "ISFJ", "ESFJ", "ISTJ", "ESTJ"],
        1: []
    }
}

export function getCompatiblePersonalities1(type){
    return CompatiblityChart[type][0];
}

export function getCompatiblePersonalities2(type){
    return CompatiblityChart[type][1];
}

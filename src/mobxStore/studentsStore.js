const { makeAutoObservable, observable, action } = require("mobx");

class StudentsModel{
    students = [];
    displyedStudents = [];
    sortedStudentsandBackup = [];

    constructor(){
        makeAutoObservable(this)
    }

    Add(student) {
        this.students.push(student)
    }

    GetDisplayedStudents(){
        return this.displyedStudents
    }


    getCurrentAge(date) {
        return ((new Date().getTime() - new Date(date)) / (24 * 3600 * 365.25 * 1000)) | 0;
    }

    Set(students) {
        this.students = students
        this.displyedStudents = students

        for(var i in this.displyedStudents){
            console.log(i)
            this.displyedStudents[i].age = this.getCurrentAge(this.displyedStudents[i].birthday)
        }

        this.sortedStudentsandBackup = this.displyedStudents
    }

    DeleteStudent(id){
        this.students = this.students.filter(student => student.id !== id)
        this.displyedStudents = this.displyedStudents.filter(student => student.id !== id)
        this.sortedStudentsandBackup = this.sortedStudentsandBackup.filter(student => student.id !== id)
    }

    Sort(field){
        switch (field){
            case ('alphabetRight'):
                this.displyedStudents.sort((a, b) => this.compareString(a.name, b.name))
                this.sortedStudentsandBackup = this.displyedStudents
                return
            case ('alphabetReverse'):
                this.displyedStudents.sort((a, b) => this.compareString(a.name, b.name))
                this.displyedStudents.reverse()
                this.sortedStudentsandBackup = this.displyedStudents
                return
            case ('raitingtRight'):
                this.displyedStudents.sort((a, b) => a.rating > b.rating ? 1 : -1)
                this.sortedStudentsandBackup = this.displyedStudents
                return
            case ('raitingReverse'):
                this.displyedStudents.sort((a, b) => a.rating < b.rating ? 1 : -1)
                this.sortedStudentsandBackup = this.displyedStudents
                return
            case ('ageRight'):
                this.displyedStudents.sort((a, b) => a.age > b.age ? 1 : -1)
                this.sortedStudentsandBackup = this.displyedStudents
                return
            case ('ageReverse'):
                this.displyedStudents.sort((a, b) => a.age < b.age ? 1 : -1)
                this.sortedStudentsandBackup = this.displyedStudents
                return
        }
    }

    compareString(str1, str2){
        var rx = /([^\d]+|\d+)/ig
        var str1split = str1.match(rx)
        var str2split = str2.match(rx)
        for(var i=0, l=Math.min(str1split.length, str2split.length); i < l; i++) {
            var s1 = str1split[i],
                s2 = str2split[i]
            if (s1 === s2) continue
            if (isNaN(+s1) || isNaN(+s2))
                return s1 > s2 ? 1 : -1
            else
                return +s1 - s2
        }
        return 0
    }


    SearchByName(inputRef){
        this.displyedStudents = this.sortedStudentsandBackup
        this.displyedStudents = this.displyedStudents.filter(student =>
            student.name.toLowerCase().indexOf(inputRef.current.value.toLowerCase()) !== -1)
    }
}

const studentsStore = new StudentsModel()
export default studentsStore

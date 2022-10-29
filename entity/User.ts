import { Entity, PrimaryGeneratedColumn, Column} from "typeorm"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    Dateofbirth: string

     @Column()
    age: number

     @Column()
    standard: number

     @Column()
    city: string

    @Column()
    skills: string

    @Column()
    Briefintroduction: string


    @Column()
    Enrollmentfromdate: string


    @Column()
    Enrollmenttodate: string
    @Column()
    status: string

    @Column()
    subject: string


}
package com.neyser.library.entities;

import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name = "loans")
public class Loan {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    private Date loan_date;
    private Date due_date;
    private Date return_date;
    private String status;

    @OneToOne
    @JoinColumn(name = "id_book")
    private Book book;

    public Loan() {
    }

    public Loan(Long id, User user, Date loan_date, Date due_date, Date return_date, String status) {
        this.id = id;
        this.user = user;
        this.loan_date = loan_date;
        this.due_date = due_date;
        this.return_date = return_date;
        this.status = status;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Date getLoan_date() {
        return loan_date;
    }

    public void setLoan_date(Date loan_date) {
        this.loan_date = loan_date;
    }

    public Date getDue_date() {
        return due_date;
    }

    public void setDue_date(Date due_date) {
        this.due_date = due_date;
    }

    public Date getReturn_date() {
        return return_date;
    }

    public void setReturn_date(Date return_date) {
        this.return_date = return_date;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    @Override
    public String toString() {
        return "Loan{" +
                "id=" + id +
                ", user=" + user +
                ", loan_date=" + loan_date +
                ", due_date=" + due_date +
                ", return_date=" + return_date +
                ", status='" + status + '\'' +
                '}';
    }
}

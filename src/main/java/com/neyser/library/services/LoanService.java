package com.neyser.library.services;

import com.neyser.library.entities.Loan;

import java.util.List;

public interface LoanService {

    List<Loan> findAll();

    Loan save(Loan loan);
}

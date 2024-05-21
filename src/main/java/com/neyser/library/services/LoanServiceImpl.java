package com.neyser.library.services;

import com.neyser.library.entities.Loan;
import com.neyser.library.entities.User;
import com.neyser.library.repositories.LoanRepository;
import com.neyser.library.repositories.RoleRepository;
import com.neyser.library.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class LoanServiceImpl implements LoanService{

    @Autowired
    private LoanRepository loanRepository;

    @Override
    @Transactional(readOnly = true)
    public List<Loan> findAll() {
        return (List<Loan>) loanRepository.findAll();
    }

    @Override
    public Loan save(Loan loan) {
        return loanRepository.save(loan);
    }
}

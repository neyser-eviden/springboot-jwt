package com.neyser.library.repositories;

import com.neyser.library.entities.Loan;
import org.springframework.data.repository.CrudRepository;

public interface LoanRepository extends CrudRepository<Loan, Long> {
}

package com.neyser.library.controllers;

import com.neyser.library.entities.Loan;
import com.neyser.library.entities.User;
import com.neyser.library.services.LoanService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(originPatterns = "*")
@RestController
@RequestMapping("/api/loans")
public class LoanController {

    @Autowired
    private LoanService loanService;

    @GetMapping
    public List<Loan> list(){
        return loanService.findAll();
    }

    //@PreAuthorize("hasRole('ADMIN')")
    @PostMapping
    public ResponseEntity<?> create(@Valid @RequestBody Loan loan, BindingResult result){
        /*if(result.hasFieldErrors()){
            return validation(result);
        }*/
        return ResponseEntity.status(HttpStatus.CREATED).body(loanService.save(loan));
    }


}

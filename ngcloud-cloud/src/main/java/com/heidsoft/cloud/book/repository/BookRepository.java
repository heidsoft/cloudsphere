//package com.heidsoft.cloud.book.repository;
//
//import com.heidsoft.cloud.book.model.Book;
//import org.springframework.data.domain.Page;
//import org.springframework.data.domain.Pageable;
//import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;
//
//import java.util.List;
//
//public interface BookRepository extends ElasticsearchRepository<Book, String> {
//
//    Page<Book> findByAuthor(String author, Pageable pageable);
//
//    List<Book> findByTitle(String title);
//
//}
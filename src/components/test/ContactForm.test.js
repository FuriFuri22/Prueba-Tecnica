import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ContactForm from '../ContactForm';

describe('Componente ContactForm', () => {
  test('renderiza el formulario de contacto', () => {
    render(<ContactForm />);
    expect(screen.getByText('Contacto')).toBeInTheDocument();
  });

  test('muestra mensajes de validación cuando los campos están vacíos', () => {
    render(<ContactForm />);
    
    fireEvent.click(screen.getByText('Enviar'));

    expect(screen.getByText('El nombre es obligatorio.')).toBeInTheDocument();
    expect(screen.getByText('El email es obligatorio.')).toBeInTheDocument();
    expect(screen.getByText('El mensaje es obligatorio.')).toBeInTheDocument();
  });

  test('muestra mensaje de validación para email inválido', async () => {
    render(<ContactForm />);
    
    fireEvent.change(screen.getByLabelText('Nombre:'), { target: { value: 'Test Name' } });
    fireEvent.change(screen.getByLabelText('Email:'), { target: { value: 'invalidemail' } });
    fireEvent.change(screen.getByLabelText('Mensaje:'), { target: { value: 'Test Message' } });
    
    fireEvent.click(screen.getByText('Enviar'));
    
    expect(screen.getByText('El email no es válido.')).toBeInTheDocument();
    
  });

  test('muestra mensaje de éxito cuando el formulario se envía correctamente', async () => {
    render(<ContactForm />);
    
    fireEvent.change(screen.getByLabelText('Nombre:'), { target: { value: 'Test Name' } });
    fireEvent.change(screen.getByLabelText('Email:'), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByLabelText('Mensaje:'), { target: { value: 'Test Message' } });

    fireEvent.click(screen.getByText('Enviar'));

    expect(await screen.findByText('Formulario enviado con éxito.')).toBeInTheDocument();
  });
});

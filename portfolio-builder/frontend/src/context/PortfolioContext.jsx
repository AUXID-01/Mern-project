import React, { createContext, useState, useContext, useEffect } from 'react';
import { portfolioService } from '../services/portfolioService';

const PortfolioContext = createContext();

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within PortfolioProvider');
  }
  return context;
};

export const PortfolioProvider = ({ children }) => {
  const [portfolios, setPortfolios] = useState([]);
  const [currentPortfolio, setCurrentPortfolio] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchPortfolios = async () => {
    try {
      setLoading(true);
      const data = await portfolioService.getAll();
      setPortfolios(data);
    } catch (error) {
      console.error('Error fetching portfolios:', error);
    } finally {
      setLoading(false);
    }
  };

  const createPortfolio = async (portfolioData) => {
    try {
      const newPortfolio = await portfolioService.create(portfolioData);
      setPortfolios([...portfolios, newPortfolio]);
      return newPortfolio;
    } catch (error) {
      throw error;
    }
  };

  const updatePortfolio = async (id, portfolioData) => {
    try {
      const updated = await portfolioService.update(id, portfolioData);
      setPortfolios(portfolios.map(p => p._id === id ? updated : p));
      if (currentPortfolio?._id === id) {
        setCurrentPortfolio(updated);
      }
      return updated;
    } catch (error) {
      throw error;
    }
  };

  const deletePortfolio = async (id) => {
    try {
      await portfolioService.delete(id);
      setPortfolios(portfolios.filter(p => p._id !== id));
      if (currentPortfolio?._id === id) {
        setCurrentPortfolio(null);
      }
    } catch (error) {
      throw error;
    }
  };

  const value = {
    portfolios,
    currentPortfolio,
    setCurrentPortfolio,
    loading,
    fetchPortfolios,
    createPortfolio,
    updatePortfolio,
    deletePortfolio
  };

  return <PortfolioContext.Provider value={value}>{children}</PortfolioContext.Provider>;
};
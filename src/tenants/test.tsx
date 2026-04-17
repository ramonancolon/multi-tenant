import React, { useState, useEffect } from 'react';

// 1. TypeScript Interface
export interface Transaction {
  id: string;
  amount: number;
  date: string;
  description: string;
}

// Mock API Function
const fetchTransactions = (): Promise<Transaction[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 'tx-001', amount: 124.50, date: '2026-02-25', description: 'Whole Foods Market' },
        { id: 'tx-002', amount: 45.00, date: '2026-02-26', description: 'Shell Gas Station' },
        { id: 'tx-003', amount: 15.99, date: '2026-02-27', description: 'Netflix Subscription' },
        { id: 'tx-004', amount: 8.50, date: '2026-02-28', description: 'Local Coffee Shop' },
        { id: 'tx-005', amount: 1200.00, date: '2026-03-01', description: 'Monthly Rent' },
      ]);
    }, 800); // Simulates an 800ms network delay
  });
};

// 2. Functional React Component
const TransactionViewer: React.FC = () => {
  // 3. State Management
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // 4. Fetch Data on Mount
  useEffect(() => {
    const getTransactions = async () => {
      try {
        const data = await fetchTransactions();
        setTransactions(data);
      } catch (error) {
        console.error("Failed to fetch transactions:", error);
      } finally {
        setIsLoading(false);
      }
    };

    getTransactions();
  }, []);

  // 5. Filter Logic
  const filteredTransactions = transactions.filter((transaction) =>
    transaction.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: '500px', margin: '2rem auto' }}>
      <h2>Transactions</h2>
      
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search descriptions..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{
          marginBottom: '1rem',
          padding: '0.5rem',
          width: '100%',
          boxSizing: 'border-box',
          borderRadius: '4px',
          border: '1px solid #ccc'
        }}
      />

      {/* Rendered List */}
      {isLoading ? (
        <p style={{ color: '#666' }}>Fetching your transactions...</p>
      ) : (
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {filteredTransactions.length > 0 ? (
            filteredTransactions.map((tx) => (
              <li 
                key={tx.id} 
                style={{ 
                  borderBottom: '1px solid #eee', 
                  padding: '0.75rem 0',
                  display: 'flex',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <strong>{tx.description}</strong>
                  <div style={{ fontSize: '0.85rem', color: '#666' }}>{tx.date}</div>
                </div>
                <div style={{ fontWeight: 'bold' }}>
                  ${tx.amount.toFixed(2)}
                </div>
              </li>
            ))
          ) : (
            <li style={{ color: '#d9534f' }}>
              No transactions found matching "{searchQuery}".
            </li>
          )}
        </ul>
      )}
    </div>
  );
};

export default TransactionViewer;